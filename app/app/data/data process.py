#This file currently takes in a csv file, and outputs a reordered data frame with user inputs.


import pandas as pd
import numpy as np
import json

data = pd.read_csv("export (5).csv")

def parse_json_to_df(json_str):
    try:
        data = json.loads(json_str)
        return pd.Series({
            "type": data.get("type", None),
            "price": data.get("price", None),
            "unit_type": data.get("unit_type", None),
            "num_bed": data.get("num_bed", None),
            "location": data.get("location", None),
            "distance": data.get("distance", None),
            "num_bath": data.get("num_bath", None),
            "gender": data.get("gender", None)
        })
    except:
        # Return a series with NaN values in case of errors
        return pd.Series({
            "type": None,
            "price": None,
            "unit_type": None,
            "num_bed": None,
            "location": None,
            "distance": None,
            "num_bath": None,
            "gender": None
        })

# Apply the function to the 'parsed_output' column and concatenate with the original dataframe
df_parsed = data['parsed_output'].apply(parse_json_to_df)
df_combined = pd.concat([data, df_parsed], axis=1)

# Drop the 'parsed_output' column as it's no longer needed
df_combined = df_combined.drop(columns=["parsed_output"])

# Filter the dataframe for entries with type == 2, people looking for renters.
df_type_2 = df_combined[df_combined["type"] == 2]


def recommend_housing_modified(ideal_budget, preferred_distance, gender_preference, df):
    # Calculate the budget and distance proximity scores
    df["budget_proximity"] = abs(df["price"] - ideal_budget)
    df["distance_proximity"] = abs(df["distance"] - preferred_distance)
    
    # Gender preference scoring
    if gender_preference == "any":
        # Assign a score of 2 to null gender and 1 to others
        df["gender_score"] = df["gender"].apply(lambda x: 2 if pd.isnull(x) else 1)
    else:
        # Assign a score of 3 to matching gender, 2 to null gender, and 1 to others
        df["gender_score"] = df["gender"].apply(lambda x: 3 if x == gender_preference else (2 if pd.isnull(x) else 1))
    
    # Image and body length scoring
    df["image_score"] = ~df["images"].eq("[NULL]")  # True for non-null images, False otherwise
    df["body_length"] = df["body"].str.len()
    
    # Rank based on the scores: higher values of gender_score, image_score, and body_length are better
    # lower values of budget_proximity and distance_proximity are better
    df = df.sort_values(by=["gender_score", "budget_proximity", "distance_proximity", "image_score", "body_length"],
                        ascending=[False, True, True, False, False])
    
    # Drop the temporary scoring columns
    df = df.drop(columns=["budget_proximity", "distance_proximity", "gender_score", "image_score", "body_length"])
    
    return df

import reflex as rx
import pandas as pd
class Listing:
    id: int
    url: str
    body: str
    timestamp: str
    images: [str]
    data: dict

    def __init__(self, id:int, url:str, body:str, timestamp="", images=[], data={}) -> None:
        self.id: int = id
        self.url: str = url
        self.body: str  = body
        self.timestamp: str = timestamp
        self.images: [str] = images
        self.data: dict = data
    
    data = []

    def listings_to_dataframe(listings):
        rows = []
        for listing in listings:
            row = {
                "id": listing.id,
                "url": listing.url,
                "body": listing.body,
                "timestamp": listing.timestamp,
                "images": listing.images,
            }
            # merging the data dictionary with the row dictionary
            row.update(listing.data)
            rows.append(row)
        return pd.DataFrame(rows)
    
    def dataframe_to_listings(df):
        listings = []

        # Iterate over each row in the dataframe
        for _, row in df.iterrows():
            # Extract attributes directly related to the Listing
            id_val = row['id']
            url = row['url']
            body = row['body']
            timestamp = row['timestamp']
            images = row['images']
            
            # Extract the remaining columns for the 'data' attribute
            data = {
                'type': row['type'],
                'price': row['price'],
                'unit_type': row['unit_type'],
                'num_bath': row['num_bath'],
                'num_bed': row['num_bed'],
                'location': row['location'],
                'distance': row['distance'],
                'gender': row['gender']
            }
            
            # Create a Listing object and append to result list
            listings.append(Listing(id_val, url, body, timestamp, images, data))

        return listings
    
    # def __str__(self):
    #     s = ",".join(self.images)
    #     return f"{self.id},{self.url},{self.body},{self.timestamp},{s},{self.data}"


    
    
    

unit1_url = "https://housing.berkeley.edu/wp-content/uploads/unit1-outside-750x500-1-700x500.jpg"
unit2_url = "https://americanlibrariesmagazine.org/wp-content/uploads/2017/08/design-moffitt-1.jpg"
sample = {
  "type": 1,
  "price": 1050,
  "unit_type": 1,
  "num_bath": 2,
  "num_bed": 2,
  "location": "Southside",
  "distance": 0.5,
  "gender": 1
}

body_1 = "I am a graduate student at Cal and I have a private furnished bedroom on MLK and Delaware to sublet for the months of June and July. rent will be 1300 + utilities. Here is the craigslist posting dm me"
body_2 = "Spring 2024 Jan- June Sublease Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too! If you are interested, want more details, or have questions please reach out!"

Listing.data = [Listing(1, url = unit1_url,  body = body_1, timestamp = "Jan-10-2020", images = unit1_url, data = sample),
                       Listing(2, url = unit2_url,  body = body_2, timestamp = "June-20-2023", images = unit1_url, data = sample),
                       Listing(3, url = unit2_url,  body = body_2, timestamp = "Jan-10-2020", images = unit1_url, data = sample),
                       Listing(4, url = unit2_url,  body = body_2, timestamp = "Jan-10-2020", images = unit2_url, data = sample),
                       Listing(5, url = unit2_url,  body = body_2, timestamp = "Jan-10-2020", images = unit2_url, data = sample),
                       Listing(6, url = unit2_url,  body = body_2, timestamp = "Jan-10-2020", images = unit2_url, data = sample),
                       Listing(7, url = unit2_url,  body = body_2, timestamp = "Jan-10-2020", images = unit2_url, data = sample),
                       Listing(8, url = unit2_url,  body = body_2, timestamp = "Jan-10-2020", images = unit2_url, data = sample),
                         ]

Listing.listings_to_dataframe(Listing.data)



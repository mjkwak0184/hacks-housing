CREATE DATABASE example_db
WITH ENGINE = "postgres",
PARAMETERS = {
    "user": "demo_user",
    "password": "demo_password",
    "host": "3.220.66.106",
    "port": "5432",
    "database": "demo"
    };




CREATE ML_ENGINE openai_engine
FROM openai
USING
    api_key = 'your-openai-api-key';


CREATE MODEL mindsdb.combined_model_
PREDICT parsed_output
USING
  engine = 'openai_engine',
  prompt_template = 'You are a classifier for housing posts in Berkeley. 
  You want to provide classification only based on the post content. Respond to me in JSON format after analyzing :{{body}} 
  Only provide key-value pairs for "type", "price", "unit_type", "num_bed", "location", "distance". 
  For key "type", assign an integer 1 if the post is posted by people looking to renting a place to stay, 2 if the post is posted by landlord/current tenant looking for renters/subleases, 3 for unknown. 
  For key "price", assign a number for the rent the post is looking for. If rent is not specified, ignore this key. 
  For key "num_bed", assign a number for the number of bedrooms in the house, if the number of bedrooms is not specified, ignore this key.
  For "unit_type", assign 1 if a room is rented out, assign 2 if an entire house/apartment with multiple rooms is rented out, if the type of unit is not specified, ignore this key. 
  For "location", assign address mentioned the post, if the location of the housing is not specified, ignore this key. 
  For "distance", calculate and assign a number in miles for the distance between the housing location and UC Berkeley Sather Gate, if the location of the housing is not specified, ignore this key.';
  


CREATE OR REPLACE TABLE psql_datasource.posts_classification (
    SELECT input.id, input.url, input.timestamp, input.body, input.images, output.parsed_output
    FROM psql_datasource.posts AS input
    JOIN combined_model_ AS output
);


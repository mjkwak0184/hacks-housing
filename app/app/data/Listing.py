import reflex as rx
import pandas as pd
class Listing:
    def __init__(self, id, url, body, timestamp="", images=[], data={}) -> None:
        self.id = id
        self.url= url
        self.body = body
        self.timestamp = timestamp
        self.images = images
        self.data = data
    
    sample_data = []

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


    
    
    

unit1_url = "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/393640815_2546204882203493_2764637398827397985_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4wVgP9zNbzMAX_P7alj&_nc_ht=scontent-atl3-1.xx&oh=00_AfA9mZZSmH-CIp-Z6HHxG2zU1gqfjF6W9oIL2Nnvo4reVQ&oe=65443266"
unit2_url = "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/397399591_2126546514218993_4738919453268130653_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yGZPy3-_L40AX9iW7YP&_nc_ht=scontent-atl3-1.xx&oh=00_AfBgznTevlbddttNAyQWJPylTGnpU5eqV8UFje9mFMsKFw&oe=6543D61A"
unit3_url = "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/396710150_297174383196444_6796893575791022824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TzYpNVfqbTAAX-ERpWM&_nc_ht=scontent-atl3-1.xx&oh=00_AfCet5HRtbn7TItG74KHANvtOH1WzPQwTfuDXsiXORTWKA&oe=6543D48B"
unit4_url = "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/395450827_872660757696220_6598379516900682110_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N9LwnaeYP1QAX9shxvi&_nc_ht=scontent-atl3-1.xx&oh=00_AfDN4-yqkOx2f506uQ4NtfSvIf6GcDn3ztMXJ3nSa39f7w&oe=65436899"
unit5_url = "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395758919_308470398602173_3207521252533706889_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7UgEoqpNGWwAX9Lfiwd&_nc_ht=scontent-atl3-2.xx&oh=00_AfCO1dG6VA9UHXk9rWtnm9GEqdyH_u5UOjuB2mwaE1iz1w&oe=6543C301"
unit6_url = "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/397240135_24762300103368601_483910716347031452_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ui8rNnd19lIAX9C_Whh&_nc_ht=scontent-atl3-1.xx&oh=00_AfA4bXskRNS-xiffeevYlLdXldU3-Aa3fVo97LGakZiwdw&oe=65442299"
unit7_url = "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/395388887_1706392373172543_4797809958436331633_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DysKUkaTldEAX-oyFRB&_nc_ht=scontent-atl3-2.xx&oh=00_AfCmgEs5eLKs2ciaTSnBEvXIoStgZ3Vw6UHOv0ROzo60qQ&oe=654290D6"
unit8_url = "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/396735328_10168178130585022_6322194620757932184_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JUTS-Jq5M3cAX_Kq6cz&_nc_ht=scontent-atl3-1.xx&oh=00_AfAYjE2eaWn-tRNwTZPE6CF7oJXc5DMQERTRw2cINc23QQ&oe=65437BFB"
sample1 = {
  "type": 1,
  "price": 1050,
  "unit_type": 1,
  "num_bath": 2,
  "num_bed": 2,
  "location": "Southside",
  "distance": 0.5,
  "gender": 1,
  "housemate": "@Xun_ww, @T_Chang",
}

sample2 = {
  "type": 1,
  "price": 1050,
  "unit_type": 1,
  "num_bath": 2,
  "num_bed": 2,
  "location": "Southside",
  "distance": 0.5,
  "gender": 1,
  "housemate": "@Xun_ww, @T_Chang, @TK_K",
}

sample3 = {
  "type": 1,
  "price": 1050,
  "unit_type": 1,
  "num_bath": 2,
  "num_bed": 2,
  "location": "Southside",
  "distance": 0.5,
  "gender": 1,
  "housemate": "@MJ_xx, @Cal_hh",
}

sample4 = {
  "type": 1,
  "price": 1050,
  "unit_type": 1,
  "num_bath": 2,
  "num_bed": 2,
  "location": "Southside",
  "distance": 0.5,
  "gender": 1,
  "housemate": "@Xun_ZZ",
}
unit1_post = "https://www.facebook.com/photo/?fbid=2546203545536960&set=pcb.1858490074546806"
unit2_post = "https://www.facebook.com/photo/?fbid=2126546117552366&set=pcb.1864490643946749"
unit3_post = "https://www.facebook.com/photo/?fbid=2044289395939487&set=gm.1864468030615677&idorvanity=128476910881473"
unit4_post = "https://www.facebook.com/photo/?fbid=297174403196442&set=pcb.1864431217286025"
unit5_post = "https://www.facebook.com/photo/?fbid=872660797696216&set=pcb.1864396477289499"
unit6_post = "https://www.facebook.com/photo/?fbid=308467761935770&set=pcb.1861920180870462"
unit7_post = "https://www.facebook.com/photo/?fbid=24762300080035270&set=pcb.1864329413962872"
unit8_post = "https://www.facebook.com/pfbid0WbUx5kZKeeMGgDdjEWZ4LBuvHiikGvP6x5n6HhMXsRVzWQshyT5zSbT6szp962nql/videos/pcb.1863309114064902/351837304188629"

body_1 = "I am a graduate student at Cal and I have a private furnished bedroom on MLK and Delaware to sublet for the months of June and July. rent will be 1300 + utilities. Here is the craigslist posting dm me"
body_2 = "Spring 2024 Jan- June Sublease Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too! If you are interested, want more details, or have questions please reach out!"
body_3 = "2283 Hearst Ave studio $1625"
body_4 = "Hi, I'm looking for a sublease for the 2024 Spring Semester. I'm in Berkeley working as an independent software developer and assistant coach for the UC squash team. I also have a 2.5 lbs. service dog named Peanut, so if you or any of your housemates smoke cigarettes indoors, please do not DM or comment on this post please as it's extremely toxic for such a small dog. I'm looking to stay in a budget of around $1000/mo."
body_5 = "Looking for housing in the Downtown Berkeley area! Open to singles or doubles, and need to have parking for my car. Little bit about myself: I’m a working professional currently on my gap year, applying to medical school. I work near Berkeley M-Fri, so will be out of the apartment from 7:30 am - 5:30 pm everyday. I travel home on the weekends so I won’t be there then either.I’m not alc, 420 friendly. Looking for female only roomies!"
body_6 = "[SPRING SEMESTER SUBLET; VERY LARGE SINGLE] Hello everyone! I am subletting my large single room in a 2 Bed, 1 Bath apartment for the Spring semester 2024 (January-May 2024); looking for a male-identifying subletter! Rent is $1600/month + PG&E, but with the size of the room and the location only 10 minutes from campus (located off Dwight between College and Piedmont), it is completely worth it! The room has lots of natural light and is very spacious! I will be leaving the room furnished, so you do not need to worry about furnishings. Please message me if you’re interested!"
body_7 = "Hello, I am looking to sub-lease a place for the Spring semester! I am honestly pretty quite and keep to myself for the most part, and I probably gonna be outside a good amount of the time! Please let me know if anyone has any rooms available, my budget is about 1000"
body_8 = "I'm looking to stay in a budget of around $1000/mo."



Listing.sample_data = [Listing(1, url = unit1_post,  body = body_1, timestamp = "Jan-10-2020", images = unit1_url, data = sample1),
                       Listing(2, url = unit2_post,  body = body_2, timestamp = "June-20-2023", images = unit2_url, data = sample2),
                       Listing(3, url = unit3_post,  body = body_3, timestamp = "Jan-10-2020", images = unit3_url, data = sample3),
                       Listing(4, url = unit4_post,  body = body_4, timestamp = "Jan-10-2020", images = unit4_url, data = sample4),
                       Listing(5, url = unit5_post,  body = body_5, timestamp = "Jan-10-2020", images = unit5_url, data = sample2),
                       Listing(6, url = unit6_post,  body = body_2, timestamp = "Jan-10-2020", images = unit6_url, data = sample1),
                       Listing(7, url = unit7_post,  body = body_2, timestamp = "Jan-10-2020", images = unit7_url, data = sample2),
                       Listing(8, url = unit8_post,  body = body_2, timestamp = "Jan-10-2020", images = unit8_url, data = sample4),
                         ]

Listing.listings_to_dataframe(Listing.sample_data)



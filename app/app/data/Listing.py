import reflex as rx
class Listing:
    def __init__(self, id, url, body, price) -> None:
        self.id = id
        self. url= url
        self.body = body
        self.price = price
    
    sample_data = []
    

unit1_url = "https://housing.berkeley.edu/wp-content/uploads/unit1-outside-750x500-1-700x500.jpg"
unit2_url = "https://americanlibrariesmagazine.org/wp-content/uploads/2017/08/design-moffitt-1.jpg"

body_1 = "I am a graduate student at Cal and I have a private furnished bedroom on MLK and Delaware to sublet for the months of June and July. rent will be 1300 + utilities. Here is the craigslist posting dm me"
body_2 = "Spring 2024 Jan- June Sublease Hi everyone! I am subleasing my spot in a double at The Varsity for Spring 2024 (beginning of Jan-beginning of June- 5 month lease) because I will be studying abroad. My roommate is very friendly and chill and one of my closest friends as well! It is a spacious double in a 3 bed/2 bath apartment with in unit washer/dryer, valet trash, and two balconies. The location is prime and a little over a block away from campus, close to Trader Joe’s, a walk away from the BART station too! The living room has a view of the golden gate too! If you are interested, want more details, or have questions please reach out!"

Listing.sample_data = [Listing(1, url = unit1_url,  body = body_1, price =  3000),
                       Listing(2, url = unit2_url,  body = body_2, price =  2000),
                       Listing(2, url = unit2_url,  body = body_2, price =  2000),
                       Listing(2, url = unit2_url,  body = body_2, price =  2000),
                       Listing(2, url = unit2_url,  body = body_2, price =  2000),
                       Listing(2, url = unit2_url,  body = body_2, price =  2000),
                         ]


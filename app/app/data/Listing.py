import reflex as rx
class Listing:
    def __init__(self, id, url, body, data = {}) -> None:
        self.id = id
        self. url= url
        self.body = body
        self.data = data
    
    sample_data = []
    

unit1_url = "https://housing.berkeley.edu/wp-content/uploads/unit1-outside-750x500-1-700x500.jpg"
unit2_url = "https://americanlibrariesmagazine.org/wp-content/uploads/2017/08/design-moffitt-1.jpg"

Listing.sample_data = [Listing(1, url = unit1_url,  body = "Unit 1 Zixun", data = {"url": unit1_url, "price": 3000}),
                       Listing(1, url = unit1_url,  body = "Mofit Library", data = {"url": unit2_url, "price": 3000})
                       ]
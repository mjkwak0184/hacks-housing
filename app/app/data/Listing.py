class Listing:
    def __init__(self, id, body, data = {}, roommate = []) -> None:
        self.id = id
        self.body = body
        self.data = data
        self.roommate = roommate
    
    sample_data = []
    

Listing.sample_data = [Listing(1, "Listing 3 body", {"price": 3000, "beds": 4}), Listing(2, "Listing 2 body")]
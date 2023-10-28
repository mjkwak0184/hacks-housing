class Listing:
    def __init__(self, id: int, body: str) -> None:
        self.id = id
        self.body = body
    
    sample_data = []
    

Listing.sample_data = [Listing(1, "Listing 1 body"), Listing(2, "Listing 2 body")]
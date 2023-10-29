import reflex as rx
from base import State
from app.data.Listing import Listing
import json

class Post(rx.Model, table=True):
    url: str
    timestamp: str
    body: str
    images: str
    parsed_output: str

    # Converts Post to Listing type
    def to_listing(self) -> Listing:
        return Listing(self.id, self.url, self.body, self.timestamp, self.images.split(","), json.loads(self.parsed_output))

class PostState(State):
    posts:[Listing] = []

    def get_post(id, add_to_post_state = False):
        with rx.session() as session:
            post = session.exec(
                Post.select.where(Post.id == id)
            ).first()
            if post:
                listing = post.to_listing()
                if add_to_post_state:
                    PostState.posts.append(listing)
                return listing
            return None

    def get_all_post():
        with rx.session() as session:
            posts = session.exec(Post.select)
            if posts:
                listings = []
                for post in posts:
                    listings.append(post.to_listing())
                PostState.posts = listings
                return listings
            return None
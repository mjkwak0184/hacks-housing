import reflex as rx
from app.app.states.base import State

class User_Listing(rx.Model, table=True):
    user_id: str        # email
    post_id: str

class Query_User_Listing(State):
    id: int
    
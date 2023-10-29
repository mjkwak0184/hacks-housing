"""Base state for the app."""
import reflex as rx
from typing import Optional

class User(rx.Model, table=True):
    email: str
    username: str
    password: str
    phone: str
    prefs_price: int
    prefs_gender: str
    prefs_distance: str

class State(rx.State):
    """Base state for the app.

    The base state is used to store general vars used throughout the app.
    """

    current_user : Optional[User] = None

    @rx.var
    def is_logged_in(self):
        return self.current_user is not None

    def logout(self):
        self.reset()
        # return rx.redirect("/")






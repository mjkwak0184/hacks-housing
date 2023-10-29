import reflex as rx
from base import User, State
from types import Optional

class User(rx.Model, table=True):
    email: str
    username: str
    password: str
    phone: str
    prefs_price: float
    prefs_gender: str
    prefs_dist: float



class UserState(State):
    current_user : Optional[User] = None

    @rx.var
    def is_logged_in(self):
        return self.current_user is not None

    def logout(self):
        self.reset()
        return rx.redirect("/")
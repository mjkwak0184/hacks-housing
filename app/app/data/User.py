import reflex as rx
from app.state import State
from typing import Optional

class User(rx.Model, table=True):
    email: str
    username: str
    password: str
    phone: str
    prefs_price: float
    prefs_gender: str
    prefs_dist: float

class Query_User(State):
    email: str
    user: Optional[User] = None
    def get_user(self):
        with rx.session() as session:
            result = session.query(User).filter(User.email == self.email).all()
            if result:
                self.user = result[0]

# class Add_User(State):
#     user: User

#     def add_user(self):
#         with rx.session() as session:
#             if self.user:
#                 session.add(self.user)
#                 session.commit()
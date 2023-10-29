import reflex as rx
from app.state import State


class User(rx.Model, table=True):
    def __init__(self, id, email, firstname, lastname, profile_url, **kwargs):
        self.id = id
        self.email = email
        self.firstname = firstname
        self.lastname = lastname
        self.profile_url = profile_url
        self.kwargs = kwargs
    
class UserQuery(State):
    email: str
    user: User

    def run(self):
        with rx.session() as session:
            self.user = session.query(User).filter(User.email == self.email).all()[0]

class UserInsert(State):
    def run(self, user: User):
        if not user: return False
        with rx.session() as session:
            session.add(user)
            session.commit()
            return True

"""The settings page."""

from app.templates import template

import reflex as rx
from app.states.base import User, State


class LoginPageState(State):
    email: str
    password: str

    @rx.var
    def login_form_disabled(self) -> bool:
        return len(self.email) == 0 or len(self.password) == 0
    
    def set_email(self, email):
        self.email = email.strip()
    
    def set_password(self, password):
        self.password = password.strip()

    def login(self):
        with rx.session() as session:
            user = session.exec(
                User.select.where(User.email == self.email)
            ).first()

            if user and user.password == self.password:
                # assign self.current_user from parent state
                self.current_user = user
                if not user.prefs_price:
                    return rx.redirect("/form")
                return rx.redirect("/housing")
            else:
                return rx.window_alert("Matching email and password record not found. Please try again.")
    
    def signup(self):
        with rx.session() as session:
            if session.exec(User.select.where(User.email == self.email)).first():
                return rx.window_alert("Account already registered.")
            new_user = User(email=self.email, password=self.password)
            session.add(new_user)
            session.expire_on_commit = False
            session.commit()
            rx.window_alert("Account successfully created.")
            return rx.redirect("/login")




@template(route="/login", title="Login")
def login() -> rx.Component:
    """The login page.

    Returns:
        The UI for the login page.
    """

    # if State.is_logged_in:
    #     return rx.redirect("/housing")

    return rx.vstack(
        rx.cond(
            ~State.is_logged_in,
            rx.vstack(
                rx.heading("Login", font_size="4em"),
                rx.input(name="email", on_change=LoginPageState.set_email, placeholder="Email", type_="text", padding="1em", font_size="1.5em"),
                rx.input(name="password", on_change=LoginPageState.set_password, placeholder="Password", type_="password", padding="1em", margin_top="1.5em", font_size="1.5em"),
                rx.button("Login", padding="1em", margin_top="1.5em", font_size="1.5em", on_click=LoginPageState.login, is_disabled=LoginPageState.login_form_disabled),
                rx.button("Create New Account", padding="1em", margin_top="1.5em", font_size="1.5em", on_click=LoginPageState.signup, is_disabled=LoginPageState.login_form_disabled),
                rx.link(rx.text("Forgot password?", font_size="1.2em"), href="/reset-password"),
            ),
        ),

        width="100vw",  # Full viewport width
        height="80vh",  # Full viewport height
        display="flex",  # Enables flexbox
        align_items="center",  # Vertically centers content
        justify_content="center",  # Horizontally centers content
    )
    
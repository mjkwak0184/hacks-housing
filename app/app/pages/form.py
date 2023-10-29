"""The dashboard page."""
from app.templates import template

import reflex as rx
from app.states.base import User, State

class FormState(State):
    username: str
    prefs_price: int
    prefs_gender: str
    prefs_distance: float

    def set_username(self, username):
        self.username = username
    
    def set_prefs_price(self, prefs_price):
        self.prefs_price = prefs_price
    
    def set_prefs_gender(self, prefs_gender):
        self.prefs_gender = prefs_gender
    
    def set_prefs_distance(self, prefs_distance):
        self.prefs_distance = prefs_distance
    
    def form_submit(self):
        if self.current_user is None: return
        with rx.session() as session:
            user = session.query(User).filter(User.email == self.current_user.email).first()
            if user is not None:
                if self.prefs_distance != "": user.prefs_distance = self.prefs_distance
                if self.prefs_gender != "": user.prefs_gender = self.prefs_gender
                if self.prefs_price != 0: user.prefs_price = self.prefs_price
                if self.username != "": user.username = self.username
            session.add(user)
            session.commit()
            return rx.window_alert("Successfully saved.")

@template(route="/form", title="Form")
def form() -> rx.Component:
    """The user form page.

    Returns:
        The UI for the dashboard page.
    """
    # FormState.prefs_distance = State.current_user.prefs_distance
    # FormState.prefs_price = State.current_user.prefs_price
    # FormState.username = State.current_user.username
    # FormState.prefs_gender = State.current_user.prefs_gender

    return rx.vstack(
        rx.vstack(
            rx.heading("Preference Form", font_size="2em", text_align = "left"),
            rx.input(
                placeholder="Display Name",
                id="username",
                on_change=FormState.set_username,
                value=State.current_user.username
            ),
            rx.number_input(
                placeholder="Budget", id="prefs_price", on_change=FormState.set_prefs_price, value=State.current_user.prefs_price
            ),
            rx.input(
                placeholder="Gender", id="prefs_gender", on_change=FormState.set_prefs_gender, value=State.current_user.prefs_gender
            ),
            rx.input(
                placeholder="Distance", id="prefs_distance", on_change=FormState.set_prefs_distance, value=State.current_user.prefs_distance
            ),
            rx.hstack(
                rx.checkbox("Privacy Agreement", id="check"),
            ),
            rx.button("Submit", on_click=FormState.form_submit),
        ),
        width="90vw",  # Full viewport width
        height="90vh",  # Full viewport height
        display="flex",  # Enables flexbox
        align_items="left",  
        justify_content="left",  # Horizontally centers content
    )
    


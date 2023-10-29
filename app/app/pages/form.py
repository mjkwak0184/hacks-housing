"""The dashboard page."""
from app.templates import template

import reflex as rx
from app.states.base import State

@template(route="/form", title="Form")
def form() -> rx.Component:
    """The user form page.

    Returns:
        The UI for the dashboard page.
    """
    return rx.vstack(
        rx.form(
            rx.vstack(
                rx.heading("Preference Form", font_size="2em", text_align = "left"),
                rx.input(
                    placeholder="First Name",
                    id="first_name",
                ),
                rx.input(
                    placeholder="Last Name", id="last_name"
                ),
                rx.input(
                    placeholder="Budget", id="price_max"
                ),
                rx.input(
                    placeholder="Gender", id="price_max"
                ),
                rx.input(
                    placeholder="Distance", id="price_max"
                ),
                rx.hstack(
                    rx.checkbox("Privacy Agreement", id="check"),
                ),
                rx.button("Submit", type_="submit"),
                rx.button("Logout", padding="0.5em", margin_top="5em", font_size="1.5em", on_click=State.handle_login_click),
            ),
            on_submit= State.handle_submit,
        ),
        width="90vw",  # Full viewport width
        height="90vh",  # Full viewport height
        display="flex",  # Enables flexbox
        align_items="left",  
        justify_content="left",  # Horizontally centers content
    )
    


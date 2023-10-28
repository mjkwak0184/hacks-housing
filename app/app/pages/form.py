"""The dashboard page."""
from app.templates import template

import reflex as rx
from app.state import State

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
                    placeholder="Price Maximum", id="price_max"
                ),
                rx.hstack(
                    rx.checkbox("Privacy Agreement", id="check"),
                ),
                rx.button("Submit", type_="submit"),
            ),
            on_submit= State.handle_submit,
        ),
        width="100vw",  # Full viewport width
        height="100vh",  # Full viewport height
        display="flex",  # Enables flexbox
        align_items="left",  
        justify_content="left",  # Horizontally centers content
    )
    


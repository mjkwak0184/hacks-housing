"""The dashboard page."""
from app.templates import template

import reflex as rx


@template(route="/housing", title="Housing")
def housing() -> rx.Component:
    """The housing page.

    Returns:
        The UI for the housing dpage.
    """
    return rx.vstack(
        rx.heading("Dashboard", font_size="3em"),
        rx.text("Welcome to Reflex!"),
        rx.text(
            "You can edit this page in ",
            rx.code("{your_app}/pages/housing.py"),
        ),
    )

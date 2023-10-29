"""The home page of the app."""
import reflex as rx

from app import styles
from app.templates import template
from app.styles import accent_color, accent_text_color


@template(route="/", title="Home")
def index() -> rx.Component:
    """The home page.

    Returns:
        The UI for the home page.
    """
    
    style = {
        "color": accent_text_color,
        "background_color": accent_color,
        "text_transform": "uppercase",
        "font-weight": "bold",
        "font-size": "10pt",
        "padding": "6px 10px 6px 10px",
        "border-radius": "100px"
    }

    return rx.hstack(
            rx.vstack(
                rx.text("Navigating the housing market, especially around dynamic regions like Berkeley, \
                    can be daunting. But what if there was a smarter way to find your dream home, without the usual \
                    hassles?", width="50%"),
                rx.spacer(size="2em"),
                rx.text("Enter [Your Startup Name]. Our platform, powered by advanced AI, is not just about finding a home\
                    – it's about finding the right home for you. Share with us your budget and how close or far\
                    you'd like to be from Berkeley, and our system will carefully analyze these preferences, \
                    along with other specifics you provide.", width="50%", style = style),
                rx.spacer(size="2em"),
                rx.text("No more compromise between price and distance. \
                    Whether you want a cozy spot just a stone's throw from Berkeley or a serene escape a little further out, \
                    our platform is designed to find the best matches, tailored just for you.", width="50%"),
                rx.spacer(size="2em"),
                rx.text("Enjoy a streamlined, efficient, and personalized home hunting experience with [Your Startup Name]. \
                    Because your ideal home, at the right price and distance, is waiting.",width="50%"),
                rx.spacer(size="2em"),
                rx.text("what"),
                align="left"
            ),
            rx.vstack(
                rx.text("picture")
            )
    )
    

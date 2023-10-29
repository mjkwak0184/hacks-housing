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
    "color": "#333",              
    "font-weight": "600",
    "font-size": "1em",
    "padding": "12px 12px",
    "border-radius": "8px",
    }


    return rx.vstack(
            rx.hstack(
                rx.vstack(
                rx.text("Make Campus Housing Easy.", height="100%", font_size = "2.5em", font_weight="bold"),
                rx.text("Navigating the housing market, especially around dynamic regions like Berkeley, \
                    can be daunting. But what if there was a smarter way to find your dream home, without the usual \
                    hassles?", width="100%", style = style),
                ),
                rx.spacer(size="2em"),
                rx.image(src="https://www.brayerelectric.com/wp-content/uploads/2020/11/AnnaHead_Final.jpg", 
                         width="50%", 
                         height = "50%",
                         border="1px solid #555",
                         box_shadow="lg")
            ),
            rx.hstack (
                rx.image(src="  https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMGhvdXNpbmd8ZW58MHx8MHx8fDA%3D", 
                         width="50%", 
                         height = "50%", 
                         align = "left",
                         border="1px solid #555",
                         box_shadow="lg"),
                rx.vstack(
                rx.text("Personalized AI Solution", height="100%", font_size = "2.5em", font_weight="bold"),
                rx.text("Enter [Your Startup Name]. Our platform, powered by advanced AI, is not just about finding a home\
                    – it's about finding the right home for you. Share with us your budget and how close or far\
                    you'd like to be from Berkeley, and our system will carefully analyze these preferences, \
                    along with other specifics you provide.", width="100%", style = style),
            ),
            ),
            rx.hstack(
                rx.stack(
                rx.text("Bringing You Joy", height = "100%", font_size = "2.5em", font_weight="bold"),
                rx.spacer(size="4em"),
                rx.text("No more compromise between price and distance. \
                    Whether you want a cozy spot just a stone's throw from Berkeley or a serene escape a little further out, \
                    our platform is designed to find the best matches, tailored just for you. Enjoy a streamlined, efficient, and personalized home hunting experience with [Your Startup Name]. \
                    Because your ideal home, at the right price and distance, is waiting.", width="100%", style = style),
                ),
                rx.spacer(size="2em"),
                rx.image(src="https://www.pace.edu/sites/default/files/styles/16_9_1600x900/public/2022-04/housing-interior-hero.jpg?h=993b43e0&itok=PEYH6fLR", 
                         width="50%", 
                         align = "right",
                         height = "50%",
                         border="1px solid #555",
                         box_shadow="lg"),
            ),
        )

    

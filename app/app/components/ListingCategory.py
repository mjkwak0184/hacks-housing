import reflex as rx
from app.styles import accent_color, accent_text_color

style = {
    "color": accent_text_color,
    "background_color": accent_color,
    "text_transform": "uppercase",
    "font-weight": "bold",
    "font-size": "10pt",
    "padding": "6px 10px 6px 10px",
    "border-radius": "100px"
}

def ListingCategory(text) -> rx.Component:
    return rx.text(text, style=style)

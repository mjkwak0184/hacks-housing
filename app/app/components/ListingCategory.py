import reflex as rx
from app.styles import accent_color, accent_text_color

style = {
    "color": accent_text_color,
    "background_color": accent_color,
    "text_transform": "uppercase",
    "font_weight": "bold",
    "font_size": "10pt",
    "padding": "6px 10px 6px 10px",
    "border_radius": "100px"
}

def ListingCategory(key, text) -> rx.Component:
    if key == "url":
        return rx.image(
        src= text, 
        width="300px", 
        height="300px",
        border_radius="15px 15px",
        border="5px",
        box_shadow="lg"
        )
    else:
        return rx.text(text, style=style, font_weight="bold")

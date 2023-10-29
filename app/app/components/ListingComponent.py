import reflex as rx
from app.styles import accent_color, accent_text_color
from app.data.Listing import Listing
from app.components.ListingCategory import ListingCategory

def ListingComponent(listing: Listing) -> rx.Component:
    style = {
    "color": accent_text_color,
    "background_color": accent_color,
    "text_transform": "uppercase",
    "font-weight": "bold",
    "font-size": "10pt",
    "padding": "6px 10px 6px 10px",
    "border-radius": "100px"
    }
    # print(State.filled)
    return rx.vstack(
         rx.image(
                src= listing.images, 
                width="300px", 
                height="300px",
                border_radius="15px 15px",
                border="5px",
                box_shadow="lg"
            ),
            rx.hstack(
                rx.text("Price: " + str(listing.data["price"]), font_weight = "bold", style = style),
                rx.checkbox()
            ),
            #*[ListingCategory(key,listing.data[key]) for key in listing.data]
            rx.popover(
            rx.popover_trigger(rx.button("Details")),
            rx.popover_content(
            rx.popover_header("Post Content", font_weight = "bold"),
            rx.popover_body(listing.body),
            rx.popover_header("Potential Room Mates", font_weight = "bold"),
            rx.popover_footer(rx.text(listing.data["housemate"])),
            rx.popover_header("Original Post", font_weight = "bold"),
            rx.link("Housing Page ",href=listing.url, color="rgb(107,99,246)", align = "center"),
            rx.popover_close_button(),
            width = "700px",
            prevent_overflow = True,
            placement = "auto-start"
            ),
    ),
    )

import reflex as rx

from app.data.Listing import Listing
from app.components.ListingCategory import ListingCategory

def ListingComponent(listing) -> rx.Component:
    if not isinstance(listing, Listing): return rx.vstack()
    return rx.vstack(
            rx.image(
                src= listing.url, 
                width="300px", 
                height="300px",
                border_radius="15px 15px",
                border="5px",
                box_shadow="lg"
            ),
            rx.text(listing.data["price"], font_weight = "bold"),
            rx.popover(
            rx.popover_trigger(rx.button("Details")),
            rx.popover_content(
            rx.popover_header("Post Content", font_weight = "bold"),
            rx.popover_body(listing.body),
            rx.popover_header("Potential Room Mates", font_weight = "bold"),
            rx.popover_footer(rx.text("@Zi_xun_ww")),
            rx.popover_close_button(),
            width = "700px",
            prevent_overflow = True,
            placement = "auto-start"
            ),
        ),
    )

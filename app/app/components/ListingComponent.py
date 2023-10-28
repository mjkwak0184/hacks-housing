import reflex as rx

from app.data.Listing import Listing

def ListingComponent(listing: Listing) -> rx.Component:
    return rx.hstack(
        rx.text(listing.body)
    )

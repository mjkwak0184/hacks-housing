import reflex as rx

from app.data.Listing import Listing
from app.components.ListingCategory import ListingCategory

style = {
    
}

def ListingComponent(listing: Listing) -> rx.Component:
    return rx.vstack(
        rx.text(listing.body),
        rx.hstack(
            *[ListingCategory(f"{key}: {listing.data[key]}") for key in listing.data]
        )
    )

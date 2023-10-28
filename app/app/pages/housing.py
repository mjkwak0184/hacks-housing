"""The dashboard page."""
from app.templates import template

import reflex as rx

from app.components.ListingComponent import ListingComponent
from app.data.Listing import Listing



@template(route="/housing", title="Housing")
def housing() -> rx.Component:
    """The housing page.

    Returns:
        The UI for the housing dpage.
    """
 
    return rx.vstack(
        rx.heading("Housing", font_size="3em"),
        *[ListingComponent(listing) for listing in Listing.sample_data]
    )

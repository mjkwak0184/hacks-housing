"""The dashboard page."""
from app.templates import template

import reflex as rx

from app.components.ListingComponent import ListingComponent
from app.data.Listing import Listing

from app.data.User import User, UserInsert

@template(route="/housing", title="Housing")
def housing() -> rx.Component:
    """The housing page.

    Returns:
        The UI for the housing dpage.
    """

    query = UserInsert()
    print("Query")
    print("query", query.run(User(1, "ex", "ad", "ab", "")))
 

 
    return rx.box(
        rx.vstack(
            rx.heading("Housing", font_size="3em"),
            *[ListingComponent(listing) for listing in Listing.sample_data]
        ),
        center_content = True,
        # width = "100%",
        style = {
            "width": "100%",
            "display": "block"
        }
    )

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
    list_all = []
    item_num = len(Listing.sample_data)
    for i in range(0, item_num,3):
        sub_list = []
        sub_list.append(Listing.sample_data[i])
        sub_list.append(Listing.sample_data[i+1])
        sub_list.append(Listing.sample_data[i+2])
        list_all.append(sub_list)

    rx_hstacks = []
    for i in range(0, len(list_all)):
        hstack = rx.hstack(
        *[ListingComponent(listing) for listing in list_all[i]]
        )
        rx_hstacks.append(hstack)
    return rx.vstack(
        *rx_hstacks
    )

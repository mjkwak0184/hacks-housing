"""The dashboard page."""
from app.templates import template

import reflex as rx

from app.components.ListingComponent import ListingComponent
from app.data.Listing import Listing


from app.states.post_state import PostState
from app.states.base import State


class HousingPageState(State):
    PostState.get_all_post()


@template(route="/housing", title="Housing")
def housing() -> rx.Component:
    """The housing page.

    Returns:
        The UI for the housing dpage.
    """

    # HOUSING_PER_ROW = 4

    listing_components_array = []

    for listing in Listing.data:
        listing_components_array.append(ListingComponent(listing))
    return rx.responsive_grid(*listing_components_array)

    # list_all = []
    # item_num = len(Listing.data)
    # print(item_num)
    # for i in range(0, item_num,4):
    #     sub_list = []
    #     sub_list.append(Listing.data[i])
    #     sub_list.append(Listing.data[i+1])
    #     sub_list.append(Listing.data[i+2])
    #     sub_list.append(Listing.data[i+2])
    #     list_all.append(sub_list)

    # rx_hstacks = []
    # for i in range(0, len(list_all)):
    #     hstack = rx.hstack(
    #     *[ListingComponent(listing) for listing in list_all[i]]
    #     )
    #     rx_hstacks.append(hstack)
    # return rx.vstack(
    #     *rx_hstacks,
    # )

    def getListingComponent(listing: Listing) -> ListingComponent:
        return ListingComponent(listing)

    return rx.responsive_grid(
        rx.foreach(PostState.listings, getListingComponent)
    )

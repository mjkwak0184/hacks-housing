"""Sidebar component for the app."""

from app import styles
from app.states.base import State

import reflex as rx


def sidebar_header() -> rx.Component:
    """Sidebar header.

    Returns:
        The sidebar header component.
    """
    return rx.hstack(
        # The logo.
        rx.image(
            src="/calhouse.svg",
            height="7em",
            width ="10em"
        ),
        rx.spacer(),
        width="100%",
        
        padding="1em",
    )


def sidebar_footer() -> rx.Component:
    """Sidebar footer.

    Returns:
        The sidebar footer component.
    """
    return rx.hstack(
        rx.spacer(),
        rx.link(
            rx.text("Docs"),
            href="https://reflex.dev/docs/getting-started/introduction/",
        ),
        rx.link(
            rx.text("Blog"),
            href="https://reflex.dev/blog/",
        ),
        width="100%",
        border_top=styles.border,
        padding="1em",
    )


def sidebar_item(text: str, icon: str, url: str) -> rx.Component:
    """Sidebar item.

    Args:
        text: The text of the item.
        icon: The icon of the item.
        url: The URL of the item.

    Returns:
        rx.Component: The sidebar item component.
    """
    # Whether the item is active.
    active = (State.router.page.path == f"/{text.lower()}") | (
        (State.router.page.path == "/") & (text == "Home")
    )   

    disable_form = (text == "Form") & (~State.is_logged_in)
   #print(disable_form, url)

    tooltip_dict = {
        "Home": "Home Page",
        "Form": "Preference Form for AI housing recommendations, login required",
        "Housing": "Display of housing lists/recommendations",
        "Login": "Login Page",
        # "Logout": "Logout"
    }

    return rx.tooltip(rx.link(
        rx.hstack(
            rx.text(
                text,
                font_weight="bold",
                height="2.5em",
                padding="0.5em",
            ),
            bg=rx.cond(
                disable_form,
                "lightgray",  # Dimmed background color for the disabled state
                rx.cond(
                    active,
                    styles.accent_color,
                    "transparent",
                ),
            ),
            color=rx.cond(
                disable_form,
                "gray",  # Dimmed text color for the disabled state
                rx.cond(
                    active,
                    styles.accent_text_color,
                    styles.text_color,
                ),
            ),
            border_radius=styles.border_radius,
            box_shadow=styles.box_shadow,
            width="100%",
            padding_x="1em",
        ),
        href=rx.cond(disable_form, "", url),  # Disable the link if disable_form is True
        width="100%",
    ),
        label=tooltip_dict[text],
    )



def sidebar() -> rx.Component:
    """The sidebar.

    Returns:
        The sidebar component.
    """
    # Get all the decorated pages and add them to the sidebar.
    from reflex.page import get_decorated_pages

    return rx.box(
        rx.hstack(
            sidebar_header(),
            rx.spacer(size="2em"),
            rx.hstack(
                *[
                    sidebar_item(
                        text=page.get("title", page["route"].strip("/").capitalize()),
                        icon=page.get("image", "/github.svg"),
                        url=page["route"],
                    )
                    for page in get_decorated_pages()
                ],
                width="100%",
                overflow_y="auto",
                align_items="flex-start",
                padding="1em",
            ),
            rx.spacer(),
        ),
        display=["none", "none", "block"],
        min_width=styles.sidebar_width,
        width="100%",
        top="0px",
        border_right=styles.border,
    )

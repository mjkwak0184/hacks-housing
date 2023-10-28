"""The settings page."""

from app.templates import template

import reflex as rx


@template(route="/login", title="Login")
def login() -> rx.Component:
    """The login page.

    Returns:
        The UI for the login page.
    """
    return rx.box(
        rx.box(
            rx.vstack(
                rx.heading("Login", font_size="4em"),
                rx.input(name="username", placeholder="Username or Email", type="text", padding="1em", font_size="1.5em"),
                rx.input(name="password", placeholder="Password", type="password", padding="1em", margin_top="1.5em", font_size="1.5em"),
                rx.button("Login", padding="1em", margin_top="1.5em", font_size="1.5em"),
                rx.link(rx.text("Forgot password?", font_size="1.2em"), href="/reset-password"),
            ),
            padding="2em",
            bg="white",
            border_radius="1em",
            box_shadow="0px 4px 6px rgba(0, 0, 0, 0.1)",
            max_width="500px",  # To prevent the form from becoming too wide on large screens
        ),
        width="100vw",  # Full viewport width
        height="100vh",  # Full viewport height
        display="flex",  # Enables flexbox
        align_items="center",  # Vertically centers content
        justify_content="center",  # Horizontally centers content
    )

"""The settings page."""

from app.templates import template

import reflex as rx
from app.state import State




@template(route="/login", title="Login")
def login() -> rx.Component:
    """The login page.

    Returns:
        The UI for the login page.
    """
    print("login check:", State.log_in)
    return rx.vstack(
        rx.cond(
            ~State.log_in,
            rx.vstack(
                rx.heading("Login", font_size="4em"),
                rx.input(name="username", placeholder="Username or Email", type="text", padding="1em", font_size="1.5em"),
                rx.input(name="password", placeholder="Password", type="password", padding="1em", margin_top="1.5em", font_size="1.5em"),
                rx.button("Login", padding="1em", margin_top="1.5em", font_size="1.5em", on_click=State.handle_login_click),
                rx.link(rx.text("Forgot password?", font_size="1.2em"), href="/reset-password"),
            ),
        ),
        rx.cond(
            State.log_in,
               rx.form(
            rx.vstack(
                rx.heading("Preference Form", font_size="2em", text_align = "left"),
                rx.input(
                    placeholder="First Name",
                    id="first_name",
                ),
                rx.input(
                    placeholder="Last Name", id="last_name"
                ),
                rx.input(
                    placeholder="Price Maximum", id="price_max"
                ),
                rx.hstack(
                    rx.checkbox("Privacy Agreement", id="check"),
                ),
                rx.button("Submit", type_="submit"),
                rx.button("Logout", padding="0.5em", margin_top="5em", font_size="1.5em", on_click=State.handle_login_click),
            ),
            on_submit= State.handle_submit,
            ),
                
        ),

        width="100vw",  # Full viewport width
        height="100vh",  # Full viewport height
        display="flex",  # Enables flexbox
        align_items="center",  # Vertically centers content
        justify_content="center",  # Horizontally centers content
    )
    
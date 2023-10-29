"""The settings page."""

from app.templates import template

import reflex as rx
from app.states.base import User, State

@template(route="/logout", title="Logout")
def logout() -> rx.Component:
    """The logout page.

    Returns:
        The UI for the login page.
    """

    State.logout()

    return rx.redirect("/")
    
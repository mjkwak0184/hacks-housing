"""Welcome to Reflex!."""

from webapp.webapp.webapp import styles

# Import all the pages.
from webapp.pages import *

import reflex as rx

# Create the app and compile it.
app = rx.App(style=styles.base_style)
app.compile()

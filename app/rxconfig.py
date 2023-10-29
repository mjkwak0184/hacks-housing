import reflex as rx
import os

config = rx.Config(
    app_name="app",
    db_url = os.getenv('db_url')
)
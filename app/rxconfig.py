import reflex as rx

from scraper.secrets import db_credentials

config = rx.Config(
    app_name="app",
    # db_config = rx.DBConfig(engine="pospsycopg2tgresql+", username=db_credentials["username"], password=db_credentials["password"], host=db_credentials["host"], port=db_credentials["port"], database=db_credentials["database"])
)
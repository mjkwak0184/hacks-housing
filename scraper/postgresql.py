import psycopg2
from secrets import db_credentials


class PostgreSQL:
	connection = False
	
	@staticmethod
	def insert(table, data):
		assert len(data) > 0
		cursor = PostgreSQL.connection.cursor()
		keys = list(data.keys())
		values = list(data.values())
		placeholders = ", ".join(["%s"] * len(values))

		cols = ", ".join(keys)
		SQL = f"INSERT INTO {table} ({cols}) VALUES ({placeholders}) ON CONFLICT (id) DO NOTHING;"

		cursor.execute(SQL, values)
		PostgreSQL.connection.commit()
		cursor.close()

	@staticmethod
	def isconnected():
		return PostgreSQL.connection

	@staticmethod
	def connect():
		PostgreSQL.connection = psycopg2.connect(database=db_credentials["database"], user=db_credentials["user"], password=db_credentials["password"], host=db_credentials["host"], port=db_credentials["port"])
	
	@staticmethod
	def disconnect():
		if PostgreSQL.connection:
			PostgreSQL.connection.close()
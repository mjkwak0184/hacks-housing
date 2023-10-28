import psycopg2
from secrets import db_credentials


class PostgreSQL:
	connection = False
	
	@staticmethod
	def insert(table, data):
		assert len(data) > 0
		cursor = PostgreSQL.connection.cursor()
		keys = []
		values = []
		for key in data:
			keys.append(key)
			values.append(data[key])
		
		cols = ", ".join(keys)
		vals = ", ".join(values)
		cursor.execute(f"INSERT INTO {table} ({cols}) VALUES ({keys})")
		PostgreSQL.connection.commit()
		cursor.close()

	@staticmethod
	def isconnected():
		return PostgreSQL.connection

	@staticmethod
	def connect():
		PostgreSQL.connection = psycopg2.connect(database=db_credentails["database"], user=db_credentials["user"], password=db_credentials["password"], host=db_credentials["host"], port=db_credentials["port"])
	
	@staticmethod
	def disconnect():
		if PostgreSQL.connection:
			PostgreSQL.connection.close()
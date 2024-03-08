from google.cloud.sql.connector import Connector
import sqlalchemy
import os
import sqlalchemy.pool as pool
from news import News
from dataclasses import dataclass, asdict

credential_path = "voltaic-space-416502-edb229824c68.json"
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path



class Connection:

    def __init__(self,instance_name, db_user, db_name,db_password):
        self.INSTANCE_CONNECTION_NAME = instance_name
        self.DB_USER = db_user
        self.DB_PASSWORD = db_password
        self.DB_NAME = db_name

    def get_connection(self):
        connector = Connector()
        conn = connector.connect(
            self.INSTANCE_CONNECTION_NAME,
            "pymysql",
            user = self.DB_USER,
            password = self.DB_PASSWORD,
            db = self.DB_NAME
        )
        return conn
    
    def get_connection_pool(self):

        # return pool.QueuePool(conn, max_overflow=10, pool_size=5)
        pool = sqlalchemy.create_engine(
            "mysql+pymysql://",
            creator = self.get_connection,
        )
        return pool
    
    def create_news(self, News):
        pool = self.get_connection_pool()
        with pool.connect() as db_conn:
            sql_values = asdict(News)
            result = db_conn.execute(
                sqlalchemy.text("INSERT INTO news (category, heading, top_news, date, link, summary) \
                                VALUES (:category, :heading, :top_news, :date, :link, :summary);"),
                                sql_values
            )
            db_conn.commit()
            id = result.lastrowid
            print("Successfully Added News to DB for news id:", id)

        return id





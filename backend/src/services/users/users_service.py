################################################################################
# Imports and Modules

from models.client.client import Client
from flask_sqlalchemy import SQLAlchemy

################################################################################
class UsersService:
    
    def __init__(self):
        pass
    
    ################################################################################
    def create_user(self, name: str, phone_number: str, db_conn: SQLAlchemy) -> bool:
        """ Create a new user and return the created user. """
        
        user = Client(name=name, phone_number=phone_number)
        db_conn.session.add(user)
        db_conn.session.commit()

        return True
    
    ################################################################################
    def get_user(self, phone_number: str, db_conn: SQLAlchemy) -> None:
        """ Get a user by email and return the user. """
        
        return db_conn.session.query(Client).filter_by(phone_number=phone_number).first()
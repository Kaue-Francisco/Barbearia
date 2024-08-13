################################################################################
# Imports and Modules

from models.client.client import Client
from flask_sqlalchemy import SQLAlchemy


################################################################################
class UsersService:
    
    def __init__(self):
        pass
    
    ################################################################################
    def create_user(self, data: object, db_conn: SQLAlchemy) -> bool:
        """ Create a new user and return the created user. """
        
        name = data.get('name')
        phone_number = data.get('phone_number')
        email = data.get('email')
        password = data.get('password') 

        user = Client(name=name, email=email, phone_number=phone_number, password=password)
        db_conn.session.add(user)
        db_conn.session.commit()
    
    ################################################################################
    def get_user(self, data: dict, key:str, db_conn: SQLAlchemy) -> None:
        """ Get a user by email and return the user. """
        
        if key == "email":
            user = db_conn.session.query(Client).filter_by(email=data[f"{key}"]).first()
        elif key == "phone_number":
            user = db_conn.session.query(Client).filter_by(phone_number=data[f"{key}"]).first()
            
        if user:
            return {"user": user, "type": "User found.", "status": 200}
        
        return {"user": "", "type": "User not found.", "status": 404}
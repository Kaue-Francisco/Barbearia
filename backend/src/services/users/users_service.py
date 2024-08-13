################################################################################
# Imports and Modules

from models.client.client import Client
from flask_sqlalchemy import SQLAlchemy
from bcrypt import gensalt, hashpw

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
        
        # Hash the password
        salt = gensalt()
        hashed_password = hashpw(password.encode('utf-8'), salt)
        
        user = Client(name=name, email=email, phone_number=phone_number, password=hashed_password)
        db_conn.session.add(user)
        db_conn.session.commit()
    
    ################################################################################
    def get_user(self, data: dict, db_conn: SQLAlchemy) -> None:
        """ Get a user by email and return the user. """
        
        if data['type'] == "email":
            get_by_email = db_conn.session.query(Client).filter_by(email=data["email"]).first()

            if get_by_email:
                return {"user": get_by_email, "type": "email", "status": 200}
            
            return {"user": "", "type": "User not found.", "status": 404}
        
        get_by_phone_number = db_conn.session.query(Client).filter_by(phone_number=data["phone_number"]).first()
        
        if get_by_phone_number:
            return {"user": get_by_phone_number, "type": "phone_number", "status": 200}
        
        return {"user": "", "type": "User not found.", "status": 404}

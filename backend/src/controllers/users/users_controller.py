################################################################################
# Imports Librarys and Modules

from services.users.users_service import UsersService
from flask_sqlalchemy import SQLAlchemy
from bcrypt import checkpw

################################################################################
class UsersController:
    
    def __init__(self):
        self.users_service = UsersService()
        self.user = {}
    
    ################################################################################
    def register(self, data: object, db_conn: SQLAlchemy) -> None:
        """ Register a new user. """
        
        user_data = {
            "email": data.get('email'), 
            "phone_number": data.get('phone_number')
            }
        
        # Check if the user already exists
        user = self.is_user_exists(user_data, db_conn)
        
        # If the variable user is not None.
        if user["status"] == 404:
            self.users_service.create_user(data, db_conn)
            return {"message": "User register sucessfly.", "status": 201, "type": "successfully"}
            
        return user
            
    ################################################################################
    def login(self, data: object, db_conn: SQLAlchemy) -> None:
        """ Login a user. """
        
        user_data = {
            "email": data.get('email')
        }

        # Check if the user already exists
        user = self.is_user_exists(user_data, db_conn)
        
        if self.check_password(data, user):
            return {"message": "Login successfully.", "status": 200, "type": "successfully"}
    
        return {"message": "User not found.", "status": 404, "type": "not_found_user"}
    
    ################################################################################
    def check_password(self, data: object, user) -> bool:
        """ Check the user password. """
        
        # Converta a senha armazenada de string para bytes
        stored_password_hash = user['user'].password.encode('utf-8')
        
        # Verifique se a senha informada corresponde à senha armazenada
        if not checkpw(data['password'].encode('utf-8'), stored_password_hash):
            return False
        
        return True
    
    ################################################################################
    def get_user(self, data: dict, db_conn: SQLAlchemy) -> None:
        """ Get a user. """
        
        return self.users_service.get_user(data, db_conn)
    
    ################################################################################
    def update_user(self) -> None:
        """ Update a user. """
        pass
    
    ################################################################################
    def delete_user(self) -> None:
        """ Delete a user. """
        pass
    
    ################################################################################
    def is_user_exists(self, user_data: object, db_conn: SQLAlchemy) -> None:
        """ Check if the user already exists. """
        
        data = {}
        
        # Get the user by email
        data['email'] = user_data["email"]
        data['type'] = "email"
        response = self.get_user(data, db_conn)
        
        if response['status'] == 200: return response

        data['phone_number'] = user_data["phone_number"]
        data['type'] = "phone_number"
        response = self.users_service.get_user(data, db_conn)
        
        if response['status'] == 200: return response
            
        return {"message": "User not found.", "status": 404}
    
    ################################################################################
################################################################################
# Imports Librarys and Modules

from services.users.users_service import UsersService
from flask_sqlalchemy import SQLAlchemy

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
    def get_all_users(self) -> None:
        """ Get all users. """
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
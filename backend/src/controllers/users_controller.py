################################################################################
# Imports Librarys and Modules

from services.users_service import UsersService
from flask_sqlalchemy import SQLAlchemy

################################################################################
class UsersController:
    
    def __init__(self):
        self.users_service = UsersService()
    
    ################################################################################
    def create_user(self, data: object, db_conn: SQLAlchemy) -> None:
        """ Create a new user. """
        
        # Get the data from the request.
        name = data.get('name')
        email = data.get('email')
        phone_number = data.get('phone_number')
        
        # Check if the user already exists
        user = self.is_user_exists(email, db_conn)
        
        # If the variable user is not None.
        if not user:
            self.users_service.create_user(name, email, phone_number, db_conn)
            
        return {"message": "User checked.", "status": 201}
    
    ################################################################################
    def get_user(self, email: str, db_conn: SQLAlchemy) -> None:
        """ Get a user. """
        
        user = self.users_service.get_user(email, db_conn)
        
        return user
    
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
    def is_user_exists(self, email: str, db_conn: SQLAlchemy) -> None:
        """ Check if the user already exists. """
        
        # Get the user by email and return False if the user does not exist.
        user = self.get_user(email, db_conn)
        
        if user is None:
            return False
            
        return True
    
    ################################################################################
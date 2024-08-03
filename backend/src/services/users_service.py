################################################################################
# Imports and Modules

from backend.src.models.client.client import Client

################################################################################
class UsersService:
    
    def __init__(self):
        pass
    
    ################################################################################
    def create_user(self, name: str, email: str, phone_number: str, db_conn) -> Client:
        """ Create a new user and return the created user. """
        
        user = Client(name=name, email=email, phone_number=phone_number)
        db_conn.session.add(user)
        db_conn.session.commit()

        return True
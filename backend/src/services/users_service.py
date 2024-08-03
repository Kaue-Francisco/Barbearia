################################################################################
# Imports and Modules

from models.client.client import Client

################################################################################
class UsersService:
    
    def __init__(self):
        pass
    
    ################################################################################
    def create_user(self, name: str, email: str, phone_number: str, db_conn) -> bool:
        """ Create a new user and return the created user. """
        
        user = Client(name=name, email=email, phone_number=phone_number)
        db_conn.session.add(user)
        db_conn.session.commit()

        return True
    
    ################################################################################
    def get_user(self, email: str, db_conn) -> bool:
        """ Get a user by email and return the user. """
        
        return db_conn.session.query(Client).filter_by(email=email).first()
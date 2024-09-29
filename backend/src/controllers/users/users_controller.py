################################################################################
# Imports Librarys and Modules

from services.users.users_service import UsersService
from flask_sqlalchemy import SQLAlchemy
from bcrypt import checkpw, gensalt, hashpw
import jwt
import datetime

################################################################################
class UsersController:
    
    def __init__(self, db_conn: SQLAlchemy):
        self.users_service = UsersService()
        self.user = {}
        self.db_conn = db_conn
    
    ################################################################################
    def register(self, data: object, db_conn: SQLAlchemy) -> dict:
        """ Register a new user. """
        
        user_data = {
            "email": data.get('email'), 
            "phone_number": data.get('phone_number')
            }
        
        exists_user, key = self.is_user_exists(user_data, db_conn)
        
        # If the variable user is not None.
        if not exists_user:
            # Hash the password
            salt = gensalt()
            data['password'] = hashpw(data.get('password').encode('utf-8'), salt)

            self.users_service.create_user(data, db_conn)
            return {"message": "User register sucessfly.", "status": 200, "error": "None"}
            
        return {"message": "User already exists.", "status": 409, "error": key}
            
    ################################################################################
    def login(self, data: object, db_conn: SQLAlchemy) -> dict:
        """ Login a user. """
        
        user_data = {"email": data.get('email')}
        response, key = self.is_user_exists(user_data, db_conn)

        if response:
            user = self.get_user(user_data, key, db_conn)

            if self.check_password(data, user):
                # Gerar o token JWT
                token = jwt.encode({
                    'user_id': user['user'].id,
                    'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=1)
                }, 'your_secret_key', algorithm='HS256')

                return {"message": "Login successfully.", "status": 200, "token": token, "type": "user_login_success"}
        
        return {"message": "Login invalid.", "status": 404, "type": "not_possible_login"}

    ################################################################################
    def logout(self) -> dict:
        """ Logout a user. """
        return {"message": "Logout successfully.", "status": 200}
    
    ################################################################################
    def token_required(self, f):
        return self.users_service.token_required(f, self.db_conn)
    
    ################################################################################
    def check_password(self, data: object, user) -> bool:
        """ Check the user password. """
        
        # Convert the password to bytes
        stored_password_hash = user['user'].password.encode('utf-8')
        
        # Check if the password is correct
        if not checkpw(data['password'].encode('utf-8'), stored_password_hash): return False
        
        return True
    
    ################################################################################
    def get_user(self, data: dict, key: str, db_conn: SQLAlchemy) -> None:
        """ Get a user. """
        
        return self.users_service.get_user(data, key, db_conn)
    
    ################################################################################
    def update_user(self) -> None:
        """ Update a user. """
        pass
    
    ################################################################################
    def delete_user(self) -> None:
        """ Delete a user. """
        pass
    
    ################################################################################
    def is_user_exists(self, user_data: object, db_conn: SQLAlchemy) -> bool:
        """ Check if the user already exists. """
        
        data = {}
        
        for key in user_data.keys():
            data[key] = user_data[key]
            data["type"] = key
            response = self.get_user(data, key, db_conn)

            if response['status'] == 200: return True, key
            
        return False, None
    
    ################################################################################
    def send_email(self, data: dict) -> dict:
        """ Send an email. """
        user_email = data.get('email')
        user_name = data.get('name')
        user_message = data.get('message')
        
        return self.users_service.send_email(user_email, user_name, user_message)
    
    ################################################################################
    def validate_token(self, token: str) -> dict:
        """ Validar o token JWT. """
        
        try:
            # Decodify the token
            decoded_token = jwt.decode(token, 'your_secret_key', algorithms=['HS256'])

            # Verify if the token is valid and has not expired
            user_id = decoded_token['user_id']

            # Return a response indicating that the token is valid
            return {"message": "Token is valid.", "status": 200, "user_id": user_id}
        
        except jwt.ExpiredSignatureError:
            # Case the token has
            return {"message": "Token expired.", "status": 401, "error": "expired_token"}
        
        except jwt.InvalidTokenError:
            # Case the token is invalid
            return {"message": "Invalid token.", "status": 401, "error": "invalid_token"}

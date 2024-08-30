################################################################################
# Imports and Modules

from models.client.client import Client
from flask_sqlalchemy import SQLAlchemy
from functools import wraps
import jwt
from flask import request, jsonify

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
        elif key == "id_user":
            user = db_conn.session.query(Client).filter_by(id=data[f"{key}"]).first()
            
        if user:
            return {"user": user, "type": "User found.", "status": 200}
        
        return {"user": "", "type": "User not found.", "status": 404}
    
    ################################################################################
    def token_required(self, f, db_conn):
        @wraps(f)
        def decorated(*args, **kwargs):
            token = request.headers.get('Authorization')

            if not token:
                return jsonify({"message": "Token is missing!", "status": 401}), 401

            try:
                data = jwt.decode(token, 'your_secret_key', algorithms=['HS256'])
                current_user = db_conn.session.query(Client).filter_by(id=data['user_id']).first()
                if not current_user:
                    raise jwt.InvalidTokenError
            except jwt.ExpiredSignatureError:
                return jsonify({"message": "Token has expired!", "status": 401}), 401
            except jwt.InvalidTokenError:
                return jsonify({"message": "Invalid token!", "status": 401}), 401

            return f(current_user, *args, **kwargs)

        return decorated
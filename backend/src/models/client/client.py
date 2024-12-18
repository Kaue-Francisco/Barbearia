################################################################################
# Imports and  Modules
from flask_sqlalchemy import SQLAlchemy

################################################################################

db = SQLAlchemy()

################################################################################
class Client(db.Model):
    __tablename__ = 'client'
    
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(11), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    
    def __repr__(self):
        return f"{{'id': {self.id}, 'name': {self.name}, 'phone_number': {self.phone_number}, 'email': {self.email}, 'password': {self.password}}}"
    
    def to_dict(self):
        return {
            'id': self.id, 
            'name': self.name, 
            'phone_number': self.phone_number, 
            'email': self.email, 
            'password': self.password
        }
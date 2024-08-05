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
    email = db.Column(db.String(255), unique=True, nullable=False)
    phone_number = db.Column(db.String(11), unique=True, nullable=False)
    
    def __repr__(self):
        return f"{{'id': {self.id}, 'name': {self.name}, 'email': {self.email}, 'phone_number': {self.phone_number}}}"
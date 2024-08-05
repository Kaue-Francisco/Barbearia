################################################################################
# Imports and  Modules

from flask_sqlalchemy import SQLAlchemy

################################################################################

db = SQLAlchemy()

################################################################################

class Services(db.Model):
    __tablename__ = 'services'
    
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    service_name = db.Column(db.String(50), nullable=False)
    duration = db.Column(db.Integer, nullable=False)
    
    def __repr__(self):
        return f"{{'id': {self.id}, 'service_name': {self.service_name}, 'duration': {self.duration}}}"
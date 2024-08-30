################################################################################
# Imports and  Modules

from flask_sqlalchemy import SQLAlchemy
from models.client.client import Client

################################################################################

db = SQLAlchemy()

################################################################################
class Schedule(db.Model):
    __tablename__ = 'schedullings'
    
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    date = db.Column(db.Date, nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    client_id = db.Column(db.BigInteger, db.ForeignKey(Client.id), nullable=False)
    
    def __repr__(self):
        return f"{{'id': {self.id}, 'date': {self.date}, 'start_time': {self.start_time}, 'end_time': {self.end_time}}}"
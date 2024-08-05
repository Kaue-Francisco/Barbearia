################################################################################
# Imports and  Modules

from flask_sqlalchemy import SQLAlchemy
from models.schedule.schedule import Schedule
from models.services.services import Services

################################################################################

db = SQLAlchemy()

################################################################################

class ServicesSchedulling(db.Model):
    __tablename__ = 'services_schedulling'
    
    id_services = db.Column(db.BigInteger, db.ForeignKey(Services.id), primary_key=True, nullable=False)
    id_schedullings = db.Column(db.BigInteger, db.ForeignKey(Schedule.id), primary_key=True, nullable=False)
    
    def __init__(self, service_id, schedulle_id):
        self.id_services = service_id
        self.id_schedullings = schedulle_id
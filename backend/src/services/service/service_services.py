################################################################################
# Imports and Modules

from flask_sqlalchemy import SQLAlchemy
from models.services.services import Services

################################################################################

db = SQLAlchemy()

################################################################################

class ServiceServices():
    
    def get_service_for_id(self, service_id: int, db_conn: SQLAlchemy):
        """ Get the service for the id. """
        
        service = db_conn.session.query(Services).filter(Services.id == service_id).first()
        
        return service
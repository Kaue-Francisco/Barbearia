################################################################################
# Imports and Modules

from flask_sqlalchemy import SQLAlchemy
from models.services_schedulling.services_schedulling import ServicesSchedulling

################################################################################

db = SQLAlchemy()

################################################################################

class ServicesSchedullingService():
    
    def create_services_schedulling(self, services, schedulle, db_conn):
        """Create a new services_schedulling for multiple services"""
        
        services_schedullings = []
        
        for service in services:
            services_schedulling = ServicesSchedulling(service_id=service['service_id'], schedulle_id=schedulle.id)
            db_conn.session.add(services_schedulling)
            services_schedullings.append(services_schedulling)
        
        db_conn.session.commit()
        
        return services_schedullings
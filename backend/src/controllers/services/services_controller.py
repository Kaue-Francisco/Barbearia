################################################################################
# Imports and Modules

from flask_sqlalchemy import SQLAlchemy
from controllers.users.users_controller import UsersController
from services.schedule.schedule_service import ScheduleService
from services.service.service_services import ServiceServices

################################################################################
class ServicesController:
    
    def __init__(self):
        self.service_services = ServiceServices()
        
    ################################################################################
    def get_service_for_id(self, service_id: int, db_conn: SQLAlchemy):
        """ Get the service for the id. """
        
        service = self.service_services.get_service_for_id(service_id, db_conn)
        
        return service
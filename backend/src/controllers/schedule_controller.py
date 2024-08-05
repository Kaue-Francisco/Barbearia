################################################################################
# Imports and Modules

from flask_sqlalchemy import SQLAlchemy
from controllers.users_controller import UsersController
from services.schedule_service import ScheduleService

################################################################################
class ScheduleController:
    
    def __init__(self):
        self.users_controller = UsersController()
        self.schedule_service = ScheduleService()
    
    ################################################################################
    def get_schedule_date(self) -> None:
        pass
    
    ################################################################################
    def create_schedule(self, data: object, db_conn: SQLAlchemy) -> None:
        """ Create a new schedule. """
        
        # Get the data from the request.
        user_email = data.get('email')
        date = data.get('date')
        start_time = data.get('start_time')
        end_time = data.get('end_time')
        services = data.get('services')
        
        user = self.users_controller.get_user(user_email, db_conn)
        
        self.schedule_service.create_schedule(user, date, start_time, end_time, services, db_conn)
        
        return {"message": "Schedule checked."}, 201
    
    ################################################################################
    def update_schedule(self) -> None:
        pass
    
    def delete_schedule(self) -> None:
        pass
    
    def get_all_schedules(self) -> None:
        pass
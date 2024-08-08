################################################################################
# Imports and Modules

from flask_sqlalchemy import SQLAlchemy
from controllers.users.users_controller import UsersController
from controllers.services.services_controller import ServicesController
from services.schedule.schedule_service import ScheduleService
from services.services_schedulling.services_schedulling_service import ServicesSchedullingService
from datetime import datetime, timedelta

################################################################################
class ScheduleController:
    
    def __init__(self):
        self.users_controller = UsersController()
        self.service_controller = ServicesController()
        self.schedule_service = ScheduleService()
        self.services_schedulling_service = ServicesSchedullingService()
    
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
        services = data.get('services')
        
        # Calculate the time to finish the schedule.
        end_time = self.calculate_time_to_finish(start_time, services, db_conn)
        
        # Get the user from the database.
        user = self.users_controller.get_user(user_email, db_conn)
        
        # Create the schedule.
        schedule = self.schedule_service.create_schedule(user, date, start_time, end_time, db_conn)
        self.services_schedulling_service.create_services_schedulling(services, schedule, db_conn)
        
        return {"message": "Schedule checked."}, 201
    
    ################################################################################
    def update_schedule(self) -> None:
        pass
    
    def delete_schedule(self) -> None:
        pass
    
    def get_all_schedules(self) -> None:
        pass
    
    def calculate_time_to_finish(self, start_time, services, db_conn: SQLAlchemy) -> None:
        """ Calculate the time to finish the schedule. """
        
        # Convert start_time to a datetime object
        time = datetime.fromisoformat(start_time)
        
        for service in services:
            response = self.service_controller.get_service_for_id(service['service_id'], db_conn)
            
            # Add the duration to the current time
            time += timedelta(minutes=response.duration)
        
        end_time = time
        
        return end_time
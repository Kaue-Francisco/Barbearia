################################################################################
# Imports and Modules

from flask_sqlalchemy import SQLAlchemy
from controllers.users.users_controller import UsersController
from controllers.services.services_controller import ServicesController
from services.schedule.schedule_service import ScheduleService
from services.services_schedulling.services_schedulling_service import ServicesSchedullingService
from datetime import datetime, timedelta, time

################################################################################
class ScheduleController:
    
    def __init__(self):
        self.users_controller = UsersController()
        self.service_controller = ServicesController()
        self.schedule_service = ScheduleService()
        self.services_schedulling_service = ServicesSchedullingService()
    
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
    
    def get_all_schedulings(self, db_conn: SQLAlchemy) -> None:
        """ Get all the schedulings. """
        
        schedullings = self.schedule_service.get_all_schedulings(db_conn)
        
        return schedullings
    
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
    
    def get_available_hours(self, db_conn: SQLAlchemy):
        """ Get all available hours for the next two weeks. """
        
        # Define the working hours
        working_hours = {
            0: [],  # Monday (closed)
            1: [(time(9, 0), time(19, 0))],  # Tuesday
            2: [(time(9, 0), time(19, 0))],  # Wednesday
            3: [(time(9, 0), time(19, 0))],  # Thursday
            4: [(time(9, 0), time(19, 0))],  # Friday
            5: [(time(8, 0), time(17, 0))],  # Saturday
            6: []   # Sunday (closed)
        }
        
        # Define lunch break hours
        lunch_start = time(12, 0)
        lunch_end = time(13, 0)
        
        # Get the current date and time
        current_datetime = datetime.now()
        current_date = current_datetime.date()
        current_time = current_datetime.time()
        
        # Generate all possible hours in the next two weeks
        available_hours = []
        for i in range(14):
            day = current_date + timedelta(days=i)
            day_of_week = day.weekday()
            if day_of_week in working_hours:
                for start, end in working_hours[day_of_week]:
                    current_time_slot = datetime.combine(day, start)
                    end_time = datetime.combine(day, end)
                    while current_time_slot < end_time:
                        if not (lunch_start <= current_time_slot.time() < lunch_end):
                            if day > current_date or (day == current_date and current_time_slot.time() > current_time):
                                available_hours.append(current_time_slot)
                        current_time_slot += timedelta(minutes=30)
        
        # Get all appointments from the database
        schedullings = self.get_all_schedulings(db_conn)
        
        # Filter out the booked hours
        for schedulle in schedullings:
            start_time = schedulle.start_time
            end_time = schedulle.end_time
            available_hours = [hour for hour in available_hours if not (start_time <= hour < end_time)]
        
        return available_hours
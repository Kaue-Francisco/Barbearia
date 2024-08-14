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
    
    def __init__(self, db_conn):
        self.users_controller = UsersController(db_conn)
        self.service_controller = ServicesController()
        self.schedule_service = ScheduleService()
        self.services_schedulling_service = ServicesSchedullingService()
        
        # Define the working hours
        self.working_hours = {
            0: [],  # Monday (closed)
            1: [(time(9, 0), time(19, 0))],  # Tuesday
            2: [(time(9, 0), time(19, 0))],  # Wednesday
            3: [(time(9, 0), time(19, 0))],  # Thursday
            4: [(time(9, 0), time(19, 0))],  # Friday
            5: [(time(8, 0), time(17, 0))],  # Saturday
            6: []   # Sunday (closed)
        }
        
        # Define lunch break hours
        self.lunch_start = time(12, 0)
        self.lunch_end = time(13, 0)
        
        # Get the current date and time
        self.current_datetime = datetime.now()
        self.current_date = self.current_datetime.date()
        self.current_time = self.current_datetime.time()
    
    ################################################################################
    def create_schedule(self, data: object, db_conn: SQLAlchemy) -> None:
        """ Create a new schedule. """
        
        # Get the data from the request.
        id_user = {"id_user": data.get('id_user')}
        date = data.get('date')
        start_time = data.get('start_time')
        services = data.get('services')
        
        # Calculate the time to finish the schedule.
        end_time = self.calculate_time_to_finish(start_time, services, db_conn)
        
        # Get the user from the database.
        user = self.users_controller.get_user(id_user, "id_user", db_conn)
        
        # Create the schedule.
        schedule = self.schedule_service.create_schedule(user, date, start_time, end_time, db_conn)
        self.services_schedulling_service.create_services_schedulling(services, schedule, db_conn)
        
        return {"message": "Schedule checked."}, 201
    
    ################################################################################ 
    def get_all_schedulings(self, db_conn: SQLAlchemy) -> None:
        """ Get all the schedulings. """
        
        schedullings = self.schedule_service.get_all_schedulings(db_conn)
        
        return schedullings
    
    ################################################################################
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
    
    ################################################################################
    def get_available_hours(self, data: object, db_conn: SQLAlchemy):
        """ Get all available hours for the next two weeks. """
        
        services = [service for service in data]
        if not services:
            return []
        
        # Assume all services have the same duration for simplicity
        service_duration = sum(service['duration'] for service in services)
        
        # Generate all possible hours in the next two weeks
        available_hours = self.generate_possible_hours(service_duration)
        
        # Get all appointments from the database and filter out the booked hours
        final_available_hours = self.filter_booked_hours(available_hours, service_duration, db_conn)
        
        return final_available_hours
    
    ################################################################################
    def generate_possible_hours(self, service_duration: int):
        """ Generate all possible time slots over the next two weeks. """
        
        available_hours = []
        
        # Loop over the next 14 days
        for i in range(14):
            day = self.current_date + timedelta(days=i)
            day_of_week = day.weekday()
            
            # Check if the day is within working hours
            if day_of_week in self.working_hours:
                for start, end in self.working_hours[day_of_week]:
                    current_time_slot = datetime.combine(day, start)
                    end_time = datetime.combine(day, end)
                    
                    # Generate time slots within working hours
                    while current_time_slot + timedelta(minutes=service_duration) <= end_time:
                        service_end_time = current_time_slot + timedelta(minutes=service_duration)
                        
                        # Exclude time slots that overlap with lunch break
                        if not (self.lunch_start <= current_time_slot.time() < self.lunch_end 
                                or self.lunch_start < service_end_time.time() <= self.lunch_end):
                            
                            # Exclude past time slots
                            if day > self.current_date \
                            or (day == self.current_date and current_time_slot.time() > self.current_time):
                                
                                # Ensure the service end time is within working hours
                                if service_end_time.time() <= end:
                                    # Only add time slots starting at the top of the hour if duration is 60 minutes
                                    if service_duration == 60 and current_time_slot.minute == 0:
                                        available_hours.append(current_time_slot)
                                    elif service_duration != 60:
                                        available_hours.append(current_time_slot)
                                    
                        current_time_slot += timedelta(minutes=30)
        
        return available_hours

    ################################################################################
    def filter_booked_hours(self, available_hours: list, service_duration: int, db_conn: SQLAlchemy):
        """ Filter out the time slots that are already booked. """
        
        # Get all schedulings from the database
        schedulings = self.get_all_schedulings(db_conn)
        
        final_available_hours = []
        
        # Check each available hour against existing bookings
        for hour in available_hours:
            service_end_time = hour + timedelta(minutes=service_duration)
            conflicts = False
        
            for scheduling in schedulings:
                start_time = scheduling.start_time
                end_time = scheduling.end_time
        
                # If there is any overlap with a scheduled appointment, mark it as a conflict
                if start_time < service_end_time and hour < end_time:
                    conflicts = True
                    break
        
            # Only add hours with no conflicts to the final list
            if not conflicts:
                final_available_hours.append(hour)
        
        return final_available_hours
    
    ################################################################################
    def get_schedules_by_user(self, data: object, db_conn: SQLAlchemy) -> None:
        """ Get all the schedules by user. """
        
        # Get the data from the request.
        phone_number = data.get('phone_number')
        
        # Get the user from the database.
        user = self.users_controller.get_user(phone_number, db_conn)
        
        # Get all the schedules by user.
        schedules = self.schedule_service.get_schedules_by_user(user, db_conn)
        
        return schedules
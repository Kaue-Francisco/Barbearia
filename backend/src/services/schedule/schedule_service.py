################################################################################
# Imports and Modules

from models.schedule.schedule import Schedule

################################################################################

class ScheduleService:
    
    def __init__(self) -> None:
        pass
    
    ################################################################################
    def create_schedule(self, user, date, start_time, end_time, db_conn) -> bool:
        """ Create a new schedule and return the created schedule. """
        
        schedule = Schedule(client_id=user['user'].id, date=date, start_time=start_time, end_time=end_time)
        db_conn.session.add(schedule)
        db_conn.session.commit()
        
        return schedule

    ################################################################################
    def get_schedules_by_user_and_date(self, user, date, db_conn):
        """Get all schedules for a user on a specific date."""
        return db_conn.session.query(Schedule).filter_by(client_id=user['user'].id, date=date).all()

    ################################################################################
    def get_all_schedulings(self, db_conn) -> list:
        """ Get all the schedulings. """
        
        schedulings = db_conn.session.query(Schedule).all()
        
        return schedulings
    
    ################################################################################
    def get_schedules_by_user(self, user, db_conn) -> list:
        """ Get all the schedulings by user. """
        
        schedules = db_conn.session.query(Schedule).filter_by(client_id=user['user'].id).all()
        
        # Convert each Schedule object to a dictionary
        schedules_dict = []
        for schedule in schedules:
            schedules_dict.append({
                'id': schedule.id,
                'date': schedule.date.isoformat(),  # Convert to a JSON-compatible string
                'start_time': schedule.start_time.isoformat(),
                'end_time': schedule.end_time.isoformat(),
                # Add other attributes as needed
            })

        return schedules_dict
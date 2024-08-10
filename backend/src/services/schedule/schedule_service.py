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
        
        schedule = Schedule(client_id=user.id, date=date, start_time=start_time, end_time=end_time)
        db_conn.session.add(schedule)
        db_conn.session.commit()
        
        return schedule

    ################################################################################
    def get_all_schedulings(self, db_conn) -> list:
        """ Get all the schedulings. """
        
        schedulings = db_conn.session.query(Schedule).all()
        
        return schedulings
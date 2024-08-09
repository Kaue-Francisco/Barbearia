################################################################################
#region Imports and Modules

from flask import Flask, jsonify, make_response, request
from controllers.schedulle.schedule_controller import ScheduleController
from controllers.users.users_controller import UsersController
from database.connect_database import DatabaseConnect

################################################################################
# App Configurations

app = Flask(__name__)
schedule_controller = ScheduleController()
users_controller = UsersController()
database_connection = DatabaseConnect(app)
db_conn = database_connection.get_db()

################################################################################
#region Routes

@app.route("/")
@app.route("/home")
@app.route("/index")
@app.route("/main")
@app.route("/inicio")
def index():
    return "Home Page"

################################################################################
@app.route("/contact")
@app.route("/contato")
@app.route("/contatos")
@app.route("/touch")
def contact():
    return "Contact Page"

################################################################################
@app.route("/agendamento")
@app.route("/agenda")
@app.route("/schedule")
@app.route("/agendar")
def schedule():
    all_hours_of_day = schedule_controller.get_available_hours(db_conn)
    
    for hour in all_hours_of_day:
        print("hour:", hour)
    return make_response(jsonify(schedule_controller.get_available_hours(db_conn)))

################################################################################
@app.route("/send_schedule", methods=["POST"])
def send_schedule():
    data = request.get_json()['data']
    
    response_user = users_controller.create_user(data, db_conn)
    
    # If the status is 201, the user was created successfully.
    if response_user['status'] == 201:
        response_schedule = schedule_controller.create_schedule(data, db_conn)
        
        return make_response(jsonify(response_schedule))

################################################################################
#region Main

if __name__ == "__main__":
    app.run(debug=True)
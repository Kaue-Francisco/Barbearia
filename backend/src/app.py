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
@app.route("/schedule", methods=["POST"])
def schedule():
    data = request.get_json()['services']
    all_hours_of_day = schedule_controller.get_available_hours(data, db_conn)
    
    return make_response(jsonify(all_hours_of_day))

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
@app.route("/schedulings_by_user", methods=["POST"])
def schedulings_by_user():
    data = request.get_json()['data']
    
    response = schedule_controller.get_schedules_by_user(data, db_conn)
    
    return make_response(jsonify(response))

################################################################################
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()['data']
    
    response = users_controller.login(data, db_conn)
    
    return make_response(jsonify(response))

################################################################################
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()['data']

    response = users_controller.register(data, db_conn)
    
    if response['status'] == 200:
        return make_response(jsonify(response["type"]), 402)
    
    elif response['status'] == 404:
        return make_response(jsonify(response["type"]), 200)

################################################################################
#region Main

if __name__ == "__main__":
    app.run(debug=True)
################################################################################
#region Imports and Modules

from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
from controllers.schedulle.schedule_controller import ScheduleController
from controllers.users.users_controller import UsersController
from database.connect_database import DatabaseConnect

################################################################################
# App Configurations

app = Flask(__name__)
database_connection = DatabaseConnect(app)
db_conn = database_connection.get_db()
users_controller = UsersController(db_conn)
schedule_controller = ScheduleController(db_conn)


cors = CORS(app, origins='http://localhost:5173')
app.config['CORS_HEADERS'] = 'Content-Type'

################################################################################
#region Routes

@app.route("/schedule", methods=["GET"])
def schedule():
    data = request.get_json()['data']
    all_hours_of_day = schedule_controller.get_available_hours(data, db_conn)
    
    return make_response(jsonify(all_hours_of_day))

################################################################################
@app.route("/send_schedule", methods=["POST"])
def send_schedule():
    print("DATA: ", request.get_json())
    data = request.get_json()
    
    # If the status is 201, the user was created successfully.
    response_schedule = schedule_controller.create_schedule(data, db_conn)

    return make_response(jsonify(response_schedule['message']), response_schedule['status'])

################################################################################
@app.route("/schedulings_by_user", methods=["POST"])
def schedulings_by_user():
    data = request.get_json()['data']
    
    response = schedule_controller.get_schedules_by_user(data, db_conn)
    
    return make_response(jsonify(response))

################################################################################
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()['data']

    response = users_controller.register(data, db_conn)
    
    if response['status'] == 200:
        return make_response(jsonify({"message": response["message"], "token": response["token"]}), response["status"])
    
    return make_response(jsonify(response["message"]), response["status"])

################################################################################
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()['data']
    
    response = users_controller.login(data, db_conn)
    
    if response['status'] == 200:
        return make_response(jsonify({"message": response["message"], "token": response["token"]}), response["status"])
    
    return make_response(jsonify(response["message"]), response["status"])

################################################################################
@app.route('/protected', methods=['GET'])
@users_controller.token_required
def protected_route(current_user):
    return jsonify({"message": f"Hello {current_user.name}!", "status": 200})

################################################################################
@app.route('/logout', methods=['GET'])
def logout():
    return make_response(jsonify(users_controller.logout()))

################################################################################
@app.route('/send_email', methods=['POST'])
def send_email():
    data = request.get_json().get('data', {})
    response = users_controller.send_email(data)
    return jsonify(response)

from flask import request, jsonify

################################################################################
@app.route('/validate-token', methods=['POST'])
def some_protected_route():
    token = request.headers.get('Authorization')
    
    if not token:
        return jsonify({"message": "Token is missing.", "status": 401})
    
    # Method to validate the token
    validation_response = users_controller.validate_token(token)
    
    if validation_response['status'] != 200:
        return make_response(jsonify(validation_response), validation_response['status'])  # Return the error message
    
    # If the token is valid, return the success message
    return make_response(jsonify(validation_response), validation_response['status'])

################################################################################
@app.route("/get_user", methods=["GET"])
def get_user():
    token_user = request.headers.get('Authorization')
    data = {"token": token_user}
    response = users_controller.get_user(data, "token", db_conn)
    
    return make_response(jsonify(response['user']), response['status'])

################################################################################
#region Main

if __name__ == "__main__":
    app.run(debug=True)
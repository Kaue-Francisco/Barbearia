################################################################################
#region Imports and Modules

from flask import Flask, jsonify, make_response, request
from controllers.schedule_controller import ScheduleController
from controllers.users_controller import UsersController
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
@app.route("/agendar/")
def schedule():
    return make_response(jsonify(schedule_controller.get_schedule_date()))

################################################################################
@app.route("/send_schedule", methods=["POST"])
def send_schedule():
    data = request.get_json()['data']
    
    new_user = users_controller.create_user(data, db_conn)
    
    return {"message": "ok"}, 200

################################################################################
#region Main

if __name__ == "__main__":
    app.run(debug=True)
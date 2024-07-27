################################################################################
#region Imports Librarys

from flask import Flask, jsonify, make_response
from controllers.schedule_controller import ScheduleController

################################################################################
# App Configurations

app = Flask(__name__)
schedule_controller = ScheduleController()

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
def schedule():
    return make_response(jsonify(schedule_controller.get_schedule_date()))

################################################################################
#region Main

if __name__ == "__main__":
    app.run()

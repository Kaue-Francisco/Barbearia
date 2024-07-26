################################################################################
#region Imports Librarys

from flask import Flask

################################################################################
# App Configurations

app = Flask(__name__)

################################################################################
#region Routes

@app.route("/")
@app.route("/home")
@app.route("/index")
@app.route("/main")
@app.route("/inicio")
def index():
    return "Hello, World!"

################################################################################

@app.route("/contact")
@app.route("/contato")
@app.route("/contatos")
@app.route("/touch")
def contact():
    return "Contact Page"


################################################################################
#region Main

if __name__ == "__main__":
    app.run(debug=True)

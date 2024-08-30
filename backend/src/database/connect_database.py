################################################################################
# Imports and Modules

from flask_sqlalchemy import SQLAlchemy

################################################################################

db = SQLAlchemy()

################################################################################
class DatabaseConnect:
    def __init__(self, app):
        self.app = app
        self.init_app()

    ################################################################################
    def init_app(self):
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/barbearia_db'  # Substitua pelo seu URI do banco de dados
        self.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        db.init_app(self.app)

    ################################################################################
    def get_db(self):
        return db
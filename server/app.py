#!/usr/bin/env python3
# Standard library imports

# Remote library imports
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData

# Local imports

# Instantiate app, set attributes
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

# Define metadata, instantiate db
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)

# Instantiate REST API
api = Api(app)

# Instantiate CORS
CORS(app)


# Standard library imports

# Remote library imports
from flask import request, jsonify, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Player, Coach, Team, player_coach_association, Match

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Players(Resource):
    def get(self):
        players_dict=[player.to_dict() for player in Player.query.all()]
        response=make_response(jsonify(players_dict),200)
        return response
    
    def post(self):
        json=request.get_json()
        team_exist=Team.query.filter_by(name=json['team_name']).first()

        new_player=Player(
            name=json['name'],
            jersey_number=json['jersey_number'],
            team_id=team_exist.id
        )
        db.session.add(new_player)
        db.session.commit()
        player_dict=new_player.to_dict()
        response=make_response(jsonify(player_dict), 201)
        return response
api.add_resource(Players, '/players')

class PlayerByID(Resource):
    def get(self,id):
        player=Player.query.filter_by(id=id).first()
        player_dict=player.to_dict()
        response=make_response(jsonify(player_dict), 200)
        return response
    
    def patch(self,id):
        player=Player.query.filter_by(id=id).first()
        json=request.get_json()
        for attr, value in json.items():
            setattr(player, attr, value)

        # if "team" in json:
        #     team_data = json["team"]
        #     if player.team:
        #         for attr, value in team_data.items():
        #             setattr(player.team, attr, value)

        db.session.add(player)
        db.session.commit()
        player_dict=player.to_dict()
        response=make_response(jsonify(player_dict), 200)
        return response

    def delete(self, id):
        player=Player.query.filter_by(id=id).first()
        db.session.delete(player)
        db.session.commit()
        response_body={"message": "Player has been successfully deleted"}
        response=make_response(
            response_body,
            200
        )
        return response
api.add_resource(PlayerByID, '/players/<int:id>')

class Teams(Resource):
    def get(self):
        teams=Team.query.all()
        teams_dict=[team.to_dict() for team in teams]
        response=make_response(
            jsonify(teams_dict),
            200
        )
        return response
    
    def post(self):
        json=request.get_json()
        new_team=Team(
            name=json['name'],
            mascot=json['mascot'],
        )
        db.session.add(new_team)
        db.session.commit()
        team_dict=new_team.to_dict()
        response=make_response(jsonify(team_dict), 201)
        return response
api.add_resource(Teams, '/teams')

# class TeamById(Resource):
#     def get(self, id):
#         team=Team.query.filter_by(id=id).first()
#         team_dict=team.to_dict()
#         return make_response(jsonify(team_dict), 200)
    
#     # def patch(get, id):
#     #     team=Team.query.filter_by(id=id).first()
#     #     json=request.get_json()
#     #     for attr in json:
#     #         setattr(team, attr, json[attr])
    
#     def delete (self, id):
#         team=Team.query.filter_by(id=id).first()
#         db.session.delete(team)
#         db.session.commit()
#         response_body={'message': 'Team has been deleted'}
#         response=make_response(response_body, 200)
#         return response
# api.add_resource(TeamById, '/teams/<int:id>')

class Coaches(Resource):
    def get(self):
        coaches=Coach.query.all()
        coaches_dict=[coach.to_dict() for coach in coaches]
        response=make_response(jsonify(coaches_dict), 200)
        return response

    def post(self):
        json=request.get_json()
        team_exist=Team.query.filter_by(name=json['team_name']).first()

        new_coach=Coach(
            name=json['name'],
            coaching_position=json['coaching_position'],
            team_id=team_exist.id
        )
        db.session.add(new_coach)
        db.session.commit()
        coach_dict=new_coach.to_dict()
        response=make_response(jsonify(coach_dict), 201)
        return response
api.add_resource(Coaches, '/coaches')

class CoachById(Resource):
    def get(self, id):
        coach=Coach.query.filter_by(id=id).first()
        coach_dict=coach.to_dict()
        resposne=make_response(jsonify(coach_dict), 200)
        return response
    
    def patch(get, id):
        coach=Coach.query.filter_by(id=id).first()
        json=request.get_json()
        for attr, value in json.items():
            setattr(coach, attr, value)
        
        db.session.add(coach)
        db.session.commit()
        coach_dict=coach.to_dict()
        response=make_response(jsonify(coach_dict), 200)
        return response
    
    def delete (self, id):
        coach=Coach.query.filter_by(id=id).first()
        db.session.delete(coach)
        db.session.commit()
        response_body={'message': 'Coach has been deleted'}
        return make_response(response_body, 200)
api.add_resource(CoachById, '/coaches/<int:id>')

class PlayersCoaches(Resource):
    def get(self, id):
        player=Player.query.filter_by(id=id).first()
        players_coaches=player.coaches
        players_coaches_dict=[coach.to_dict() for coach in players_coaches]
        return make_response(jsonify(players_coaches_dict), 200)

api.add_resource(PlayersCoaches, '/playerscoaches/<int:id>')        

class CoachesPlayers(Resource):
    def get(self, id):
        coach=Coach.query.filter_by(id=id).first()
        coaches_players=coach.players
        coaches_players_dict=[player.to_dict() for player in coaches_players]
        return make_response(jsonify(coaches_players_dict), 200)

api.add_resource(CoachesPlayers, '/coachesplayers/<int:id>')

class TeamPlayers(Resource):
    def get(self, id):
        team=Team.query.filter_by(id=id).first()
        team_players=team.players
        team_players_dict=[player.to_dict() for player in team.players]
        return make_response(jsonify(team_players_dict), 200)

api.add_resource(TeamPlayers, '/teamplayers/<int:id>')

class TeamCoaches(Resource):
    def get(self, id):
        team=Team.query.filter_by(id=id).first()
        team_coaches=team.coaches
        team_coaches__dict=[coach.to_dict() for coach in team_coaches]
        return make_response(jsonify(team_coaches__dict), 200)

api.add_resource(TeamCoaches, '/teamcoaches/<int:id>')

class Matches(Resource):
    def get(self):
        matches=Match.query.all()
        matches_dict=[match.to_dict() for match in matches]
        return make_response(jsonify(matches_dict), 200)

    def post (self):
        json=request.get_json()
        home_team_exist=Team.query.filter_by(name=json['home_team']).first()
        away_team_exist=Team.query.filter_by(name=json['away_team']).first()

        new_match=Match(
            home_team_id=home_team_exist.id,
            away_team_id=away_team_exist.id,
            location=json['location'],
            date=json['date']
        )
        db.session.add(new_match)
        db.session.commit()
        match_dict=new_match.to_dict()
        return make_response(jsonify(match_dict), 201)

api.add_resource(Matches, '/matches')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

# postgresql://dtruesdale:Gr51KUilTYEJ1TZsUjlvXgfUew2pwiZj@dpg-cldpdd7gsrdc73eqg9n0-a.oregon-postgres.render.com/football_league
#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Player, Coach, Team, player_coach_association

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
        for attr in json:
            setattr(player, attr, json[attr])

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

if __name__ == '__main__':
    app.run(port=5555, debug=True)


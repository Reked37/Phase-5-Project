#!/usr/bin/env python3

from random import randint, choice, sample
from faker import Faker
from app import app, db
from models import Player, Team, Coach, player_coach_association

fake = Faker()

def delete_tables():
    print('Deleting records')
    Team.query.delete()
    Player.query.delete()
    Coach.query.delete()
    db.session.execute(player_coach_association.delete())
    db.session.commit()

def create_coaches_and_players():
    print('Creating coaches and players')
    teams = Team.query.all()
    positional_coaching_roles = ['Running back', 'Wide Receiver', 'Defensive Linemen', 'Defensive backs', 'Offensive Linemen', 'Quarterback']
    coaches = []
    players = []

    for i in range(12): 
        random_team = choice(teams)
        coach = Coach(
            name=fake.name(),
            coaching_position=choice(positional_coaching_roles),
            team_id=random_team.id
        )
        coaches.append(coach)

    for i in range(20):
        random_team = choice(teams)
        player = Player(
            name=fake.name(),
            jersey_number=randint(0, 99),
            team_id=random_team.id
        )
        players.append(player)

    db.session.add_all(coaches)
    db.session.add_all(players)
    db.session.commit()

def create_teams():
    print('Creating teams')
    teams = []
    for i in range(6):
        team = Team(
            name=fake.name(),
            mascot=fake.name(),
        )
        teams.append(team)

    db.session.add_all(teams)
    db.session.commit()

def player_coach_table():
    print('Populating player_coach_association')
    players = Player.query.all()
    coaches = Coach.query.all()

    for player in players:
        num_coaches = randint(1, 3)
        player_coaches = sample(coaches, num_coaches)

        for coach in player_coaches:
            player.coaches.append(coach)

    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        delete_tables()
        create_teams()
        create_coaches_and_players()
        player_coach_table()
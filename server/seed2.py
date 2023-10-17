from config import db
from models import Player, Coach, Team, Match, player_coach_association 
from app import app, db
from random import randint, sample

def delete_tables():
    print('Deleting records')
    Team.query.delete()
    Player.query.delete()
    Coach.query.delete()
    Match.query.delete()
    db.session.execute(player_coach_association.delete())
    db.session.commit()

def seed_data():
    # Create teams
    team1 = Team(name='Team A', mascot='Mascot A')
    team2 = Team(name='Team B', mascot='Mascot B')
    db.session.add(team1)
    db.session.add(team2)
    db.session.commit()

    # Create players
    player1 = Player(name='Player 1', jersey_number=10, team=team1)
    player2 = Player(name='Player 2', jersey_number=20, team=team1)
    player3 = Player(name='Player 3', jersey_number=30, team=team2)
    db.session.add(player1)
    db.session.add(player2)
    db.session.add(player3)
    db.session.commit()

    # Create coaches
    coach1 = Coach(name='Coach 1', coaching_position='Head Coach', team=team1)
    coach2 = Coach(name='Coach 2', coaching_position='Assistant Coach', team=team2)
    db.session.add(coach1)
    db.session.add(coach2)
    db.session.commit()

    # Create matches
    match1 = Match(date='2023-10-17', location='Stadium A', home_team=team1, away_team=team2)
    match2 = Match(date='2023-10-18', location='Stadium B', home_team=team2, away_team=team1)
    db.session.add(match1)
    db.session.add(match2)
    db.session.commit()

def player_coach_table():
    print('Populating player_coach_association')
    players = Player.query.all()
    coaches = Coach.query.all()

    for player in players:
        num_coaches = randint(1, 2)
        player_coaches = sample(coaches, num_coaches)

        for coach in player_coaches:
            player.coaches.append(coach)

    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        delete_tables()
        seed_data()
        player_coach_table()
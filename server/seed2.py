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
    team3 = Team(name='Team C', mascot='Mascot C')
    team4 = Team(name='Team D', mascot='Mascot D')
    db.session.add_all([team1, team2, team3, team4])
    db.session.commit()

    # Create players
    player1 = Player(name='Player 1', jersey_number=10, team=team1)
    player2 = Player(name='Player 2', jersey_number=20, team=team1)
    player3 = Player(name='Player 3', jersey_number=30, team=team2)
    player4 = Player(name='Player 4', jersey_number=77, team=team2)
    player5 = Player(name='Player 5', jersey_number=88, team=team3)
    player6 = Player(name='Player 6', jersey_number=3, team=team3)
    player7 = Player(name='Player 7', jersey_number=60, team=team4)
    player8 = Player(name='Player 8', jersey_number=92, team=team4)
    db.session.add_all([player1, player2, player3, player4, player5,player6,player7,player8])
    db.session.commit()

    # Create coaches
    coach1 = Coach(name='Coach 1', coaching_position='Head Coach', team=team1)
    coach2 = Coach(name='Coach 2', coaching_position='Assistant Coach', team=team1)
    coach3 = Coach(name='Coach 3', coaching_position='Head Coach', team=team2)
    coach4 = Coach(name='Coach 4', coaching_position='Assistant Coach', team=team2)
    coach5 = Coach(name='Coach 5', coaching_position='Head Coach', team=team3)
    coach6 = Coach(name='Coach 6', coaching_position='Assistant Coach', team=team3)
    coach7 = Coach(name='Coach 7', coaching_position='Head Coach', team=team4)
    coach8 = Coach(name='Coach 8', coaching_position='Assistant Coach', team=team4)
    db.session.add_all([coach1, coach2, coach3, coach4, coach5,coach6,coach7,coach8])
    db.session.commit()

    # Create matches
    match1 = Match(date='2023-10-17', location='Stadium A', home_team=team1, away_team=team2)
    match2 = Match(date='2023-10-18', location='Stadium B', home_team=team1, away_team=team3)
    match3 = Match(date='2023-10-19', location='Stadium A', home_team=team4, away_team=team1)
    match4 = Match(date='2023-10-20', location='Stadium B', home_team=team2, away_team=team3)
    match5 = Match(date='2023-10-21', location='Stadium A', home_team=team2, away_team=team4)
    match6 = Match(date='2023-10-22', location='Stadium B', home_team=team3, away_team=team4)
    db.session.add_all([match1, match2, match3, match4, match5, match6])
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
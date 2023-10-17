# Phase 5 Full-Stack Application Project; Flatiron Football League
## By: Derek Truesdale

# Description
    The basis of this project was to build a full stack appliaction from the
    front end and the back end. The goal was to be able to create an API that would be used to persist data to the front end. The API must fill all the criteria of CRUD (Create, Read, Update, Delete). Along with creating seperate views for each page that could be navigated to via a navigation bar. For the front end, the project uses react to create the web pages and use react router to easily navigate to a new page.

# Installation
    All the libraries that are used are:
        Front-end (npm/yarn):
            1. npm/yarn install
            2. semantic-ui-css
            3. react
            4. react-dom
            5. react-router-dom@6
            6. react-scripts
            7. formik
            8. yup

        Back-end:
            1. pipenv install
            2. Flask
            3. Flask-SQLalchemy
            4. Flask-Migrate
            5. SQLalchemy
            6. Faker (seeding)
            7. flask_restful
            8. flask_cors

# Usage
    The home page will be the first page you see when opening the webpage. In the top is the navigation bar which will direct you to other paths. The players page will list all the players in the Flatiron Football League which you can edit the player info with the update button. If the delete button is clicked the player will be deleted from the list.
    The team and coaches web page functions the same as it list all the teams and coaches in the league.
    Lastly, the add page is where a new player, team, or coach can be added into the league. Just fill out the information and hit submit and the new entity will be added to the proper list.

# Files
    Client:
        - index.js: This file creates and grabs the root that will allow App.js to display all its content in/
        - index.css: This file contains styling for the website
        - App.js: This is the main file of the website where all the data fetches are retriveing information through an API. After the data is retrieved it is then set to a state to pass the information to it's proper component.
        - NavBar.js: This file creates links that allows us to traverse through the website eaiser.
        - Home.js: This file is a generic file that has no paths yet added to the URL and will be the first thing the site seer sees when it comes to the website.
        - PlayersContainer.js: This component takes in player data and maps over the data that is passed to another component that creates a card for every data enrtry.
        - Player.js: This component structures the data from PlayerContainer and allows us to take each data in a data entry and place it on the page.
        - UpdatePlayer.js: This file is a page where after you click update on the Player page you will be taken to this component where you can update old information from a player.
        - TeamContainer.js: This component takes in team data and maps over the data that is passed to another component that creates a card for every data enrtry.
        - Team.js:This component structures the data from TeamContainer and allows us to take each data in a data entry and place it on the page.
        - UpdatePlayer.js: This file is a page where after you click update on the Player page you will be taken to this component where you can update old information from a player
        - CoachesContainer.js: This component takes in coach data and maps over the data that is passed to another component that creates a card for every data enrtry.
        - Coach.js:This component structures the data from CoachContainer and allows us to take each data in a data entry and place it on the page.
        - UpdatePlayer.js: This file is a page where after you click update on the Player page you will be taken to this component where you can update old information from a player

    Server:
        - App.py: This file creates each view for the website and allows to structure each view with CRUD
        - Config.py: This file set ups our connection with flask, the database, migrations, api, and cors all into one file to not clutter other files
        - Seed.py: This file fills in the database with fake entries to test out on the website.
        - Migrations/Models: These two files store our version of the schema for the database and models structures how the database should look like. 
        - App.db: This is the database




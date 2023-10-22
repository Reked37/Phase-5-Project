import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import PlayersContainer from "./PlayersContainer";
import NavBar from "./NavBar";
import TeamsContainer from "./TeamsContainer";
import CoachesContainer from "./CoachesContainer";
import Add from "./Add"
import UpdatePlayer from "./UpdatePlayer";
import ShowPlayersCoaches from "./PlayersCoaches";
import ShowCoachesPlayers from "./CoachesPlayers";
import ShowTeamCoaches from "./TeamCoaches";
import ShowTeamPlayers from "./TeamPlayers";
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux'
import store from "../Redux/Store";
import MatchesContainer from "./MatchesContainer";

function App() {
  
  // function handlePostPlayer(newPlayer){
  //   console.log('added a player to state')
  //   setPlayers([...players,newPlayer])
  // }

  // function handlePostCoach(newCoach){
  //   setCoaches([...coaches, newCoach])
  // }

  // function handlePostTeam(newTeam){
  //   setTeams([...teams, newTeam])
  // }

  // function handleUpdate(updatedPlayer){
  //   setPlayers(players.map(player=> player.id === updatedPlayer.id ? updatedPlayer : player))
  // }

  console.log(store.getState())

  return(
    <Provider store={store}>
    <div class='background'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/players" element={<PlayersContainer 
        // onDeletePlayer={handleDeletePlayer} 
        />}></Route>
        <Route path="/coaches" element={<CoachesContainer />}></Route>
        <Route path="/teams" element={<TeamsContainer />}></Route>
        <Route path='/matches' element={<MatchesContainer />}></Route>
        <Route path="/add" element={<Add 
        // onPostPlayer={handlePostPlayer} 
        // onPostTeam={handlePostTeam}
        // onPostCoach={handlePostCoach}
        />}></Route>
        <Route path='/players/:id' element={<UpdatePlayer 
        // onUpdatePlayer={handleUpdate}
        />}></Route>
        <Route path='/playerscoaches/:id' element={<ShowPlayersCoaches />}/>
        <Route path='/coachesplayers/:id' element={<ShowCoachesPlayers />}/>
        <Route path='/teamcoaches/:id' element={<ShowTeamCoaches />}/> 
        <Route path='/teamplayers/:id' element={<ShowTeamPlayers />}/>
      </Routes> 
    </div>
    </Provider>
  );
}

export default App;

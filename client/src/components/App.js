import React, {useState, useEffect} from "react";
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

function App() {
  const [players, setPlayers]=useState([])
  const [teams, setTeams]=useState([])
  const [coaches, setCoaches]=useState([])
  
  useEffect(()=>{
    fetch('/players')
    .then(res=>res.json())
    .then(data=>setPlayers(data),
  )},[])

  useEffect(()=>{
    fetch('/teams')
    .then(res=>res.json())
    .then(data=>setTeams(data),
    )},[])
  
  useEffect(()=>{
    fetch('/coaches')
    .then(res=>res.json())
    .then(data=>setCoaches(data),
  )},[])
  
  function handlePostPlayer(newPlayer){
    console.log('added a player to state')
    setPlayers([...players,newPlayer])
  }

  function handlePostCoach(newCoach){
    setCoaches([...coaches, newCoach])
  }

  function handlePostTeam(newTeam){
    setTeams([...teams, newTeam])
  }

  function handleDeletePlayer(deletePlayer){
    console.log(deletePlayer)
    const deletedPlayer=players.filter(player=>player.id !== deletePlayer.id)
    console.log(deletedPlayer)
    setPlayers(deletedPlayer)
  }

  function handleUpdate(updatedPlayer){
    setPlayers(players.map(player=> player.id === updatedPlayer.id ? updatedPlayer : player))
  }

  console.log(store.getState())

  return(
    <Provider store={store}>
    <div class='background'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/players" element={<PlayersContainer onDeletePlayer={handleDeletePlayer} />}></Route>
        <Route path="/coaches" element={<CoachesContainer />}></Route>
        <Route path="/teams" element={<TeamsContainer teams={teams}/>}></Route>
        <Route path="/add" element={<Add 
        onPostPlayer={handlePostPlayer} 
        onPostTeam={handlePostTeam}
        onPostCoach={handlePostCoach}
        />}></Route>
        <Route path='/players/:id' element={<UpdatePlayer players={players} onUpdatePlayer={handleUpdate}/>}></Route>
        <Route path='/playerscoaches/:id' element={<ShowPlayersCoaches players={players}/>}/>
        <Route path='/coachesplayers/:id' element={<ShowCoachesPlayers coaches={coaches}/>}/>
        <Route path='/teamcoaches/:id' element={<ShowTeamCoaches teams={teams}/>}/> 
        <Route path='/teamplayers/:id' element={<ShowTeamPlayers teams={teams}/>}/>
      </Routes> 
    </div>
    </Provider>
  );
}

export default App;

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
import UpdateCoach from "./UpdateCoach";

function App() {

  return(
    <Provider store={store}>
    <div class='background'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/players" element={<PlayersContainer />}></Route>
        <Route path="/coaches" element={<CoachesContainer />}></Route>
        <Route path="/teams" element={<TeamsContainer />}></Route>
        <Route path='/matches' element={<MatchesContainer />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path='/players/:id' element={<UpdatePlayer />}></Route>
        <Route path='/playerscoaches/:id' element={<ShowPlayersCoaches />}/>
        <Route path='/coachesplayers/:id' element={<ShowCoachesPlayers />}/>
        <Route path='/teamcoaches/:id' element={<ShowTeamCoaches />}/> 
        <Route path='/teamplayers/:id' element={<ShowTeamPlayers />}/>
        <Route path='/coaches/:id' element={<UpdateCoach/>}/>
      </Routes> 
    </div>
    </Provider>
  );
}

export default App;

import React from "react"
import Team from "./Team"

function TeamsContainer({teams}){
    const displayTeams=teams.map(team=>{
        return <Team passTeam={team} key={team.id}/>    
    })

    return (
        <div>
            <h1 class='headers'> Teams in the League</h1><br/>
            <div class='ui grid container'>{displayTeams}</div><br/>
            <img className='small-image' alt='team' src='https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/fjptmdctzkinv6jaon59'/>
            <br/>
        </div>
    )}

export default TeamsContainer
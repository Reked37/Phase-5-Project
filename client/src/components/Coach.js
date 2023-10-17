import React from "react"
import { useNavigate } from "react-router-dom"

function Coach({passCoach}){
    const {name, coaching_position, team}=passCoach
    const navigate=useNavigate()

    function coachesPlayers(){
        navigate(`/coachesplayers/${passCoach.id}`)
    }

    return (
        <div class='ui four wide column'>
            <div class='ui-card'>
                <h3 class='name'>{name}</h3>
                <h3 class='meta'>Coaching Position: {coaching_position}</h3>
                <h3 class='description'> Team: {team.name}</h3>
                <button type='submit' onClick={coachesPlayers} className='ui pink button'>Players</button>
            </div>
        </div>
    )}


export default Coach
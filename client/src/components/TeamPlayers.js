import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Player from './Player'

function ShowTeamPlayers({teams}){
    const [players, setPlayers]=useState([])
    const {id} = useParams()
    const team=teams.find(team=>team.id === parseInt(id))


    useEffect(()=>{
        fetch(`/coachesplayers/${team.id}`)
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[team.id])
    
    return (
        <div>
            <br/><h2 className='headers'>{team.name}'s Players</h2>
            <div className='ui grid container cards'>
            {players.map(player=><Player passPlayer={player}/>)}
            </div>
        </div>
    )
}

export default ShowTeamPlayers
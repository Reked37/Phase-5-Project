import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Player from './Player'

function ShowCoachesPlayers({coaches}){
    const [players, setPlayers]=useState([])
    const {id} = useParams()
    const coach=coaches.find(coach=>coach.id === parseInt(id))


    useEffect(()=>{
        fetch(`/coachesplayers/${coach.id}`)
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[coach.id])
    
    return (
        <div>
            <br/><h2 className='headers'>{coach.name}'s Players</h2>
            <div className='ui grid container cards'>
            {players.map(player=><Player passPlayer={player}/>)}
            </div>
        </div>
    )
}

export default ShowCoachesPlayers
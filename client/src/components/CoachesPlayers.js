import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Player from './Player'
import {useSelector} from 'react-redux'
import axios from 'axios'

function ShowCoachesPlayers(){
    const [players, setPlayers]=useState([])
    const {id} = useParams()
    const coaches=useSelector(state=>state.coaches.leagueCoaches)
    const coach=coaches.find(coach=>coach.id === parseInt(id))


    useEffect(()=>{
      axios.get(`/coachesplayers/${coach.id}`)
      .then(res=>setPlayers(res.data))
    },[coach.id])
    
    return (
        <div>
            <br/><h2 className='headers'>{coach.name}'s Players</h2>
            <div className='ui grid container cards'>
            {players.length? players.map(player=><Player passPlayer={player}/>):<div className='empty'>No Players</div>}
            </div>
        </div>
    )
}

export default ShowCoachesPlayers
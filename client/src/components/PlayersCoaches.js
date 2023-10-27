import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CoachCard from './CoachCard'
import {useSelector} from 'react-redux'
import axios from 'axios'

function ShowPlayersCoaches(){
    const [coaches, setCoaches]=useState([])
    const {id} = useParams()
    const players=useSelector(state=>state.players.leaguePlayers)
    const player=players.find(player=>player.id === parseInt(id))
    
    useEffect(()=>{
        axios.get(`/playerscoaches/${player.id}`)
        .then(res=>setCoaches(res.data))
    },[player.id])
    
    return (
        <div>
            <br/><h2 className='headers'>{player.name}'s Coaches</h2>
            <div className='ui grid container cards'>
            {coaches.map(coach=><CoachCard key={coach.name} passCoach={coach}/>)}
            </div><br/>
            <img src='https://globalsportmatters.com/wp-content/uploads/2019/12/Lamar-Jackson.jpg' alt='lamar and coach' className='small-image' />
        </div>
    )
}

export default ShowPlayersCoaches
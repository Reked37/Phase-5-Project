import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import PlayerCard from './PlayerCard'
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
            {players.length? players.map(player=><PlayerCard passPlayer={player} key={player.name}/>):<div className='empty'>No Players</div>}
            </div><br/>
            <img src='https://cdn.bleacherreport.net/images_root/slides/photos/000/635/422/93308621_original.jpg?1295018329' alt='tom brady and coach' className='small-image' />
        </div>
    )
}

export default ShowCoachesPlayers
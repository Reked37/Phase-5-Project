import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import PlayerCard from './PlayerCard'
import { useSelector } from 'react-redux'
import axios from 'axios'

function ShowTeamPlayers(){
    const [players, setPlayers]=useState([])
    const {id} = useParams()
    const teams=useSelector(state=>state.teams.leagueTeams)
    const team=teams.find(team=>team.id === parseInt(id))


    useEffect(()=>{
        axios.get(`/teamplayers/${team.id}`)
        .then(res=>setPlayers(res.data))
    },[team.id])
    
    return (
        <div>
            <br/><h2 className='headers'>{team.name}'s Players</h2><br/>
            <div className='ui grid container cards'>
            {players.length ? players.map(player=><PlayerCard passPlayer={player} key={player.id}/>):<div className='empty'>No Players</div>}
            </div><br/><br/>
            <img src='https://media.cnn.com/api/v1/images/stellar/prod/230303112454-01-nfl-review-gripes.jpg?c=16x9&q=h_720,w_1280,c_fill' alt='teamphoto' className='small-image' />
        </div>
    )
}

export default ShowTeamPlayers
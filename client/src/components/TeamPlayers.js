import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Player from './Player'
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
            <br/><h2 className='headers'>{team.name}'s Players</h2>
            <div className='ui grid container cards'>
            {players.map(player=><Player passPlayer={player}/>)}
            </div>
        </div>
    )
}

export default ShowTeamPlayers
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Coach from './Coach'
import { useSelector } from 'react-redux'
import axios from 'axios'

function ShowTeamCoaches(){
    const [coaches, setCoaches]=useState([])
    const {id} = useParams()
    const teams=useSelector(state=>state.teams.leagueTeams)
    const team=teams.find(team=>team.id === parseInt(id))


    useEffect(()=>{
        axios.get(`/teamcoaches/${team.id}`)
        .then(res=>setCoaches(res.data))
    },[team.id])
    
    return (
        <div>
            <br/><h2 className='headers'>{team.name}'s Coaches</h2>
            <div className='ui grid container cards'>
            {coaches.map(coach=><Coach key={coach.name} passCoach={coach}/>)}
            </div>
        </div>
    )
}

export default ShowTeamCoaches
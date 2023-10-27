import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CoachCard from './CoachCard'
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
            {coaches.map(coach=><CoachCard key={coach.name} passCoach={coach}/>)}
            </div><br/>
            <img src='https://cdn.vox-cdn.com/thumbor/3EcQ01Cl9eSzMdthMqdqkkkJsPs=/0x0:1920x1080/1200x800/filters:focal(804x364:1110x670)/cdn.vox-cdn.com/uploads/chorus_image/image/70483587/pjimage__3_.5.jpg' alt='teamcoaches' className='small-image'/>
        </div>
    )
}

export default ShowTeamCoaches
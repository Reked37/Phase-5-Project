import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Coach from './Coach'

function ShowTeamCoaches({teams}){
    const [coaches, setCoaches]=useState([])
    const {id} = useParams()
    const team=teams.find(team=>team.id === parseInt(id))


    useEffect(()=>{
        fetch(`/teamcoaches/${team.id}`)
        .then(res=>res.json())
        .then(data=>setCoaches(data))
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
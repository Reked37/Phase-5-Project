import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Coach from './Coach'

function ShowPlayersCoaches({players}){
    const [coaches, setCoaches]=useState([])
    const {id} = useParams()
    const player=players.find(player=>player.id === parseInt(id))


    useEffect(()=>{
        fetch(`/playerscoaches/${player.id}`)
        .then(res=>res.json())
        .then(data=>setCoaches(data))
    },[player.id])
    
    return (
        <div>
            <br/><h2 className='headers'>{player.name}'s Coaches</h2>
            <div className='ui grid container cards'>
            {coaches.map(coach=><Coach key={coach.name} passCoach={coach}/>)}
            </div>
        </div>
    )
}

export default ShowPlayersCoaches
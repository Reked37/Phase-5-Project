import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { deletePlayer } from '../Redux/playerAction'
import axios from 'axios'

function Player({passPlayer}){
    const {name, jersey_number, team}=passPlayer
    const navigate= useNavigate()
    const dispatch=useDispatch()

    function handleDeletePlayer(){
        dispatch(deletePlayer(passPlayer.id))
        axios.delete(`/players/${passPlayer.id}`)
        .then(res=>res.data)
        .catch(error=>console.log("Couldn't delete player", error))
    }

    function updatePlayer(){
        navigate(`/players/${passPlayer.id}`)
    }

    function playersCoaches(){
        navigate(`/playerscoaches/${passPlayer.id}`)
    }

    

    return(
        <div className="ui five wide column">
            <div className='ui-card'>
                <h3 className="name">{name}</h3>
                <h3 className='number'>#{jersey_number}</h3>
                <h3 className='description'>Team: {team.name}</h3>
                <div>
                    <button type='submit' onClick={updatePlayer} className='ui  blue button'>Update Player</button>
                    <button type='submit' onClick={playersCoaches} className='ui pink button'> Coaches </button>
                    <button type='submit' onClick={handleDeletePlayer} className='ui red button'>Delete Player </button>
                </div>
                
            </div>
            
        </div>
    )
}
export default Player
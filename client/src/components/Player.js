import React from 'react'
import { useNavigate } from 'react-router-dom'

function Player({passPlayer, passDeletePlayer}){
    const {name, jersey_number, team}=passPlayer
    const navigate= useNavigate()
    function deletePlayer(){
        fetch(`/players/${passPlayer.id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(()=>passDeletePlayer(passPlayer))
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
                    <button type='submit' onClick={deletePlayer} className='ui red button'>Delete Player </button>
                </div>
                
            </div>
            
        </div>
    )
}
export default Player
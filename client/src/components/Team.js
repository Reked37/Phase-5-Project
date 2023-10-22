import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteTeam } from "../Redux/teamAction"
import axios from "axios"

function Team({passTeam}){
    const {name, mascot}=passTeam
    const navigate= useNavigate()

    function teamPlayers(){
        navigate(`/teamplayers/${passTeam.id}`)
    }

    function teamCoaches(){
        navigate(`/teamcoaches/${passTeam.id}`)
    }

    return (
        <div class='ui five wide column'>
            <div class='ui-card'>
                <div class='content'>
                    <h3 class='name'>{name}</h3>
                    <h3 class='description'>Mascot: {mascot}</h3>
                    <button className='ui purple button' type='submit' onClick={teamPlayers}>Players</button>
                    <button className='ui pink button' type='submit' onClick={teamCoaches}>Coaches</button>
                </div>
                
            </div>
        </div>
    )}

export default Team
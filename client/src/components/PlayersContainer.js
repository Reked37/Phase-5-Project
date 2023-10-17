import React from "react"
import Player from "./Player"

function PlayersContainer({players, onDeletePlayer}){
    const displayPlayers=players.map(player=>{
        return <Player passPlayer={player} key={player.id} passDeletePlayer={onDeletePlayer}/>    
    })

    return (
        <div>
            <h1 class='headers'>Players in the League</h1><br/>
            <div class="ui grid container cards">{displayPlayers}</div>
        </div>
    )}

export default PlayersContainer
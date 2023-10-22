import React, {useEffect} from "react"
import Player from "./Player"
import {useSelector, connect} from 'react-redux'
import { fetchPlayers } from "../Redux/playerAction"

function PlayersContainer({fetchPlayers, onDeletePlayer}){
    useEffect(()=>{
        fetchPlayers()
    }, [fetchPlayers])
    
    const players = useSelector(state=>state.players.leaguePlayers)
    
    console.log(players)
    console.log(useSelector(state=>state))

    const displayPlayers=players.map(player=>{
        return <Player passPlayer={player} key={player.id} passDeletePlayer={onDeletePlayer}/>    
    })

    return (
        <div>
            <h1 className='headers'>Players in the League</h1><br/>
            <div className="ui grid container cards">{displayPlayers}</div>
        </div>
    )}

    const mapStateToProps= state =>{
        return{
            players:state.players
        }
    }

    const mapDispatchToProps = dispatch =>{
        return{
            fetchPlayers:()=>dispatch(fetchPlayers())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps) (PlayersContainer) 
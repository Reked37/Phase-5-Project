import React, {useEffect} from "react"
import Player from "./Player"
import {useSelector, connect} from 'react-redux'
import { fetchPlayers } from "../Redux/playerAction"

function PlayersContainer({fetchPlayers}){
    useEffect(()=>{
        fetchPlayers()
    }, [fetchPlayers])
    
    const players = useSelector(state=>state.players.leaguePlayers)

    const displayPlayers=players.map(player=>{
        return <Player passPlayer={player} key={player.id} />    
    })

    return (
        <div><br/>
            <h1 className='headers'>Players in the League</h1><br/>
            <div className="ui grid container cards">{displayPlayers}</div><br/>
            <img src='https://s7d6.scene7.com/is/image/DSGAEMSites/Football-Checklist' alt='stadium' className='small-image'/><br/>
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
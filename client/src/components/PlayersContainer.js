import React, {useEffect} from "react"
import Player from "./Player"
import {useSelector, connect} from 'react-redux'
import { fetchPlayers } from "../Redux/playerAction"

function PlayersContainer({fetchPlayers, onDeletePlayer}){
    useEffect(()=>{
        fetchPlayers()
    }, [fetchPlayers])
    
    const players = useSelector(state=>state.players.players)
    // const dispatch = useDispatch()
    
    console.log(players)
    const displayPlayers=players.map(player=>{
        return <Player passPlayer={player} key={player.id} passDeletePlayer={onDeletePlayer}/>    
    })

    return (
        <div>
            <h1 class='headers'>Players in the League</h1><br/>
            <div class="ui grid container cards">{displayPlayers}</div>
            {/* {players.map(player=>(<Player passPlayer={player} key={player.id} passDeletePlayer={onDeletePlayer}/>))} */}
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
import { FETCH_PLAYERS_FAILURE, FETCH_PLAYERS_REQUEST, FETCH_PLAYERS_SUCCESS, DELETE_PLAYER, UPDATE_PLAYER } from "./Types";
import axios from 'axios'

export const fetchPlayersRequest =() =>{
    return{
        type: FETCH_PLAYERS_REQUEST
    }
}

export const fetchPlayersSuccess =(players) =>{
    return{
        type: FETCH_PLAYERS_SUCCESS,
        payload: players
    }
}

export const fetchPlayersFailure =(error) =>{
    return{
        type: FETCH_PLAYERS_FAILURE,
        payload: error
    }
}

export const deletePlayer = (playerId)=>{
    return{
        type: DELETE_PLAYER,
        payload: playerId
    }
}

export const updatePlayer=(playerId)=>{
    return{
        type: UPDATE_PLAYER,
        payload:playerId
    }
}

export const fetchPlayers= () =>{
    return (dispatch)=>{
        dispatch(fetchPlayersRequest)
        axios.get('/players')
        .then(response=>{
            const players = response.data
            dispatch(fetchPlayersSuccess(players))
        })
        .catch(error=>{
            const errorMsg= error.message
            dispatch(fetchPlayersFailure(errorMsg))
        })
    }
}



 
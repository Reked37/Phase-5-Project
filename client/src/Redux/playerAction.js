import { FETCH_PLAYERS_FAILURE, FETCH_PLAYERS_REQUEST, FETCH_PLAYERS_SUCCESS } from "./playerType";
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

export const fetchPlayers= () =>{
    return (dispatch)=>{
        dispatch(fetchPlayersRequest)
        axios.get('/players')
        // axios.get('http://127.0.0.1:5555/players')
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
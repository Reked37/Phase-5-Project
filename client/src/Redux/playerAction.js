import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./Types";
import axios from 'axios'

export const fetchPlayersRequest =() =>{
    return{
        type: FETCH_DATA_REQUEST
    }
}

export const fetchPlayersSuccess =(players) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload: players
    }
}

export const fetchPlayersFailure =(error) =>{
    return{
        type: FETCH_DATA_FAILURE,
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
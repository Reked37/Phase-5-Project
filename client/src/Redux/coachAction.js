import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./Types";
import axios from 'axios'

export const fetchCoachesRequest =() =>{
    return{
        type: FETCH_DATA_REQUEST
    }
}

export const fetchCoachesSuccess =(players) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload: players
    }
}

export const fetchCoachesFailure =(error) =>{
    return{
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const fetchCoaches= () =>{
    return (dispatch)=>{
        dispatch(fetchCoachesRequest)
        axios.get('/coaches')
        // axios.get('http://127.0.0.1:5555/players')
        .then(response=>{
            const coaches = response.data
            dispatch(fetchPlayersSuccess(coaches))
        })
        .catch(error=>{
            const errorMsg= error.message
            dispatch(fetchPlayersFailure(errorMsg))
        })
    }
}
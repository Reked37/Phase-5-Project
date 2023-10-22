import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./Types";
import axios from 'axios'

export const fetchTeamsRequest =() =>{
    return{
        type: FETCH_DATA_REQUEST
    }
}

export const fetchTeamsSuccess =(players) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload: players
    }
}

export const fetchTeamsFailure =(error) =>{
    return{
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const fetchTeams= () =>{
    return (dispatch)=>{
        dispatch(fetchTeamsRequest)
        axios.get('/teams')
        .then(response=>{
            const teams = response.data
            dispatch(fetchTeamsSuccess(teams))
        })
        .catch(error=>{
            const errorMsg= error.message
            dispatch(fetchTeamsFailure(errorMsg))
        })
    }
}
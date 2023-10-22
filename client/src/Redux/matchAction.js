import { FETCH_MATCHES_FAILURE, FETCH_MATCHES_REQUEST, FETCH_MATCHES_SUCCESS, POST_MATCH } from "./Types";
import axios from 'axios'

export const fetchMatchesRequest =() =>{
    return{
        type: FETCH_MATCHES_REQUEST
    }
}

export const fetchMatchesSuccess =(matches) =>{
    return{
        type: FETCH_MATCHES_SUCCESS,
        payload: matches
    }
}

export const fetchMatchesFailure =(error) =>{
    return{
        type: FETCH_MATCHES_FAILURE,
        payload: error
    }
}

export const postMatch=(newMatch)=>{
    return{
        type:POST_MATCH,
        payload:newMatch
    }
}

export const fetchMatches= () =>{
    return (dispatch)=>{
        dispatch(fetchMatchesRequest)
        axios.get('/matches')
        .then(response=>{
            const matches = response.data
            dispatch(fetchMatchesSuccess(matches))
        })
        .catch(error=>{
            const errorMsg= error.message
            dispatch(fetchMatchesFailure(errorMsg))
        })
    }
}
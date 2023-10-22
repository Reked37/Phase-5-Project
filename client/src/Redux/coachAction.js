import { FETCH_COACHES_FAILURE, FETCH_COACHES_REQUEST, FETCH_COACHES_SUCCESS, POST_COACH } from "./Types";
import axios from 'axios'

export const fetchCoachesRequest =() =>{
    return{
        type: FETCH_COACHES_REQUEST
    }
}

export const fetchCoachesSuccess =(coaches) =>{
    return{
        type: FETCH_COACHES_SUCCESS,
        payload: coaches
    }
}

export const fetchCoachesFailure =(error) =>{
    return{
        type: FETCH_COACHES_FAILURE,
        payload: error
    }
}

export const postCoach=(newCoach)=>{
    return{
        type:POST_COACH,
        payload:newCoach
    }
}

export const fetchCoaches= () =>{
    return (dispatch)=>{
        dispatch(fetchCoachesRequest)
        axios.get('/coaches')
        .then(response=>{
            const coaches = response.data
            dispatch(fetchCoachesSuccess(coaches))
        })
        .catch(error=>{
            const errorMsg= error.message
            dispatch(fetchCoachesFailure(errorMsg))
        })
    }
}
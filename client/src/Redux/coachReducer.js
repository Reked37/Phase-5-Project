import { FETCH_COACHES_FAILURE, FETCH_COACHES_REQUEST, FETCH_COACHES_SUCCESS, POST_COACH } from "./Types"

const initialState={
    loading: false,
    leagueCoaches: [],
    error:''
}

const coachReducer =(state=initialState, action)=>{
    switch(action.type){
        case FETCH_COACHES_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_COACHES_SUCCESS: return{
            loading: false,
            leagueCoaches: action.payload,
            error: ''
        } 
        case FETCH_COACHES_FAILURE: return{
            loading: false,
            leagueCoaches: [],
            error: action.payload
        }
        case POST_COACH:return{
            ...state,
            leagueCoaches:[...state.leagueCoaches, action.payload]
        }
        default: return state
    }
}

export default coachReducer
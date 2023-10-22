import { UPDATE_COACH, DELETE_COACH, FETCH_COACHES_FAILURE, FETCH_COACHES_REQUEST, FETCH_COACHES_SUCCESS, POST_COACH } from "./Types"

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
        case DELETE_COACH:return{
            ...state,
            leagueCoaches: state.leagueCoaches.filter((coach)=>{
                return coach.id !== action.payload
            })
        }
        case UPDATE_COACH:return{
            ...state,
            leagueCoaches: state.leagueCoaches.map(coach=>{
                if(coach.id === action.payload){
                    return action.payload
                }
            return coach}),
            error:''
        }
        default: return state
    }
}

export default coachReducer
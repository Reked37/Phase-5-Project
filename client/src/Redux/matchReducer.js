import { FETCH_MATCHES_FAILURE, FETCH_MATCHES_REQUEST, FETCH_MATCHES_SUCCESS, POST_MATCH } from "./Types"

const initialState={
    loading: false,
    leagueMatches: [],
    error:''
}

const matchReducer =(state=initialState, action)=>{
    switch(action.type){
        case FETCH_MATCHES_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_MATCHES_SUCCESS: return{
            loading: false,
            leagueMatches: action.payload,
            error: ''
        } 
        case FETCH_MATCHES_FAILURE: return{
            loading: false,
            leagueMatches: [],
            error: action.payload
        }
        case POST_MATCH:return{
            ...state,
            leagueMatches: [...state.leagueMatches, action.payload]
        }
        default: return state
    }
}

export default matchReducer
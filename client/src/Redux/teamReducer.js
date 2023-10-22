import { FETCH_TEAMS_FAILURE, FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS } from "./Types"

const initialState={
    loading: false,
    leagueTeams: [],
    error:''
}

const teamReducer =(state=initialState, action)=>{
    switch(action.type){
        case FETCH_TEAMS_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_TEAMS_SUCCESS: return{
            loading: false,
            leagueTeams: action.payload,
            error: ''
        } 
        case FETCH_TEAMS_FAILURE: return{
            loading: false,
            leagueTeams: [],
            error: action.payload
        }
        default: return state
    }
}

export default teamReducer
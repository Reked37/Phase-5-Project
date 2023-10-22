import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./Types"

const initialState={
    loading: false,
    leagueTeams: [],
    error:''
}

const teamReducer =(state=initialState, action)=>{
    switch(action.type){
        case FETCH_DATA_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_DATA_SUCCESS: return{
            loading: false,
            leagueTeams: action.payload,
            error: ''
        } 
        case FETCH_DATA_FAILURE: return{
            loading: false,
            leagueTeams: [],
            error: action.payload
        }
        default: return state
    }
}

export default teamReducer
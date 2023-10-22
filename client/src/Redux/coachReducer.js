import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./Types"

const initialState={
    loading: false,
    leagueCoaches: [],
    error:''
}

const coachReducer =(state=initialState, action)=>{
    switch(action.type){
        case FETCH_DATA_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_DATA_SUCCESS: return{
            loading: false,
            leagueCoaches: action.payload,
            error: ''
        } 
        case FETCH_DATA_FAILURE: return{
            loading: false,
            leagueCoaches: [],
            error: action.payload
        }
        default: return state
    }
}

export default coachReducer
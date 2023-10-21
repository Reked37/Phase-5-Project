import { FETCH_PLAYERS_FAILURE, FETCH_PLAYERS_REQUEST, FETCH_PLAYERS_SUCCESS } from "./playerType"

const initialState={
    loading: false,
    players: [],
    error:''
}

const playerReducer =(state=initialState, action)=>{
    switch(action.type){
        case FETCH_PLAYERS_REQUEST: return{
            ...state,
            loading: true
        }
        case FETCH_PLAYERS_SUCCESS: return{
            loading: false,
            players: action.payload,
            error: ''
        } 
        case FETCH_PLAYERS_FAILURE: return{
            loading: false,
            players: [],
            error: action.payload
        }
        default: return state
    }
}

export default playerReducer
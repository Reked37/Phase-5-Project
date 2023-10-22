import { UPDATE_PLAYER, DELETE_PLAYER, FETCH_PLAYERS_FAILURE, FETCH_PLAYERS_REQUEST, FETCH_PLAYERS_SUCCESS } from "./Types"

const initialState={
    loading: false,
    leaguePlayers: [],
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
            leaguePlayers: action.payload,
            error: ''
        } 
        case FETCH_PLAYERS_FAILURE: return{
            loading: false,
            leaguePlayers: [],
            error: action.payload
        }
        case DELETE_PLAYER:return{
            ...state,
            leaguePlayers: state.leaguePlayers.filter((player)=>{
                return player.id !==action.payload
            })
        }
        case UPDATE_PLAYER:return{
            
        }
        default: return state
    }
}

export default playerReducer
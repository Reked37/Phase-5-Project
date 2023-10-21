import {createStore, combineReducers, applyMiddleware} from 'redux'
import playerReducer from './Redux/playerReducer'
import thunk from 'redux-thunk'


const rootReducer=combineReducers({
    players: playerReducer,
    // teams: iceCreamReducer,
    // coaches:userReducer
})

const store =createStore(rootReducer, applyMiddleware(thunk) )

export default store
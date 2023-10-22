import {createStore, combineReducers, applyMiddleware} from 'redux'
import playerReducer from './playerReducer'
import thunk from 'redux-thunk'
import coachReducer from './coachReducer'

const rootReducer=combineReducers({
    players: playerReducer,
    // teams: iceCreamReducer,
    coaches:coachReducer
})

const store =createStore(rootReducer, applyMiddleware(thunk) )

export default store
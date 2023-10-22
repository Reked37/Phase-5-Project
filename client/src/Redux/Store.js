import {createStore, combineReducers, applyMiddleware} from 'redux'
import playerReducer from './playerReducer'
import thunk from 'redux-thunk'
import coachReducer from './coachReducer'
import teamReducer from './teamReducer'

const rootReducer=combineReducers({
    players: playerReducer,
    teams: teamReducer,
    coaches:coachReducer
})

const store =createStore(rootReducer, applyMiddleware(thunk) )

export default store
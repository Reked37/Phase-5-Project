import {createStore, combineReducers, applyMiddleware} from 'redux'
import playerReducer from './playerReducer'
import thunk from 'redux-thunk'
import coachReducer from './coachReducer'
import teamReducer from './teamReducer'
import matchReducer from './matchReducer'

const rootReducer=combineReducers({
    players: playerReducer,
    teams: teamReducer,
    coaches:coachReducer,
    matches: matchReducer
})

const store =createStore(rootReducer, applyMiddleware(thunk) )

export default store
import { combineReducers } from 'redux'
import MovieReducer from './movieReducer'

export default combineReducers({movie: MovieReducer})   
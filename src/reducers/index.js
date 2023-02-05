import { combineReducers } from 'redux';
import favoritesReducer from './favoriteReducer'
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movieReducer, 
    favoritesReducer
})
export default rootReducer;
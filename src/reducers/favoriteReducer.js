import { ADD_FAVORITE_MOVIE, DELETE_FAVORITE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default favoriteReducer;
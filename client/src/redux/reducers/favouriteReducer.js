import { ADD_FAVOURITE_POSITION, GET_FAVOURITE_POSITIONS } from '../types';

const initialState = {
  currentFavourites: null,
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVOURITE_POSITIONS:
      return {
        ...state, 
        currentFavourites: action.payload,
      }
    case ADD_FAVOURITE_POSITION:
        return {
            ...state, 
        currentFavourites: action.payload,
        }
    default:
      return state;
  }
};

export default favouriteReducer;

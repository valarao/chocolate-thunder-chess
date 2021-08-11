import { GET_FAVOURITE_POSITIONS } from '../types';
import axios from 'axios';

export const getFavouritePositions = (ownerId) => async(dispatch) => {
    try {
      const serverResponse = await axios.get(`api/favourites/get/${ownerId}`);
      const { favourites } = serverResponse.data;
      return dispatch({ type: GET_FAVOURITE_POSITIONS, payload: favourites[0].favourites });
    } catch(error) {
      console.log(error);
    }
}

export const getSearchedFavourites = (ownerId, searchFilter) => async (dispatch) => {
  try {
    searchFilter = searchFilter.trim().replace(' ', '+');
    const serverResponse = await axios.get(`api/favourites/search/${ownerId}?filter=${searchFilter}`);
    const { positions } = serverResponse.data;
    return dispatch({ type: GET_FAVOURITE_POSITIONS, payload: positions });
  } catch (error) {
    console.log(error);
  }
}

export const addFavouritePosition = (id, ownerId) => async(dispatch) => {
    try {
      await axios.patch(`api/favourites/add/${ownerId}/${id}`);
      const serverResponse = await axios.get(`api/favourites/get/${ownerId}`);
      const { favourites } = serverResponse.data;
      return dispatch({ type: GET_FAVOURITE_POSITIONS, payload: favourites[0].favourites });
    } catch(error) {
      console.log(error);
    }
}

export const deleteFavouritePosition = (id, ownerId) => async(dispatch) => {
    try {
      await axios.delete(`api/favourites/delete/${ownerId}/${id}`);
      const serverResponse = await axios.get(`api/favourites/get/${ownerId}`);
      const { favourites } = serverResponse.data;
      return dispatch({ type: GET_FAVOURITE_POSITIONS, payload: favourites[0].favourites });
    } catch(error) {
      console.log(error);
    }
}
import { ADD_FAVOURITE_POSITION, GET_FAVOURITE_POSITIONS } from '../types';
import axios from 'axios';

export const getFavouritePositions = () => async(dispatch) => {
    try {
      const serverResponse = await axios.get(`api/favourites`);
      const { favourites } = serverResponse.data;
      return dispatch({ type: GET_FAVOURITE_POSITIONS, payload: favourites });
    } catch(error) {
      console.log(error);
    }
}

export const addFavouritePosition = (position) => async(dispatch) => {
    try {
      const serverResponse = await axios.post(`api/favourites`, position);
      const { favourites } = serverResponse.data;
      return dispatch({ type: ADD_FAVOURITE_POSITION, payload: favourites });
    } catch(error) {
      console.log(error);
    }
}

// export const deleteFavouritePosition = (id) => async(dispatch) => {
//     try {
//       const serverResponse = await axios.get(`api/favourites`);
//       const { favourites } = serverResponse.data;
//       return dispatch({ type: GET_FAVOURITE_POSITIONS, payload: favourites });
//     } catch(error) {
//       console.log(error);
//     }
// }
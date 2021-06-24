import { SET_CURRENT_POSITIONS, GET_COMMON_POSITIONS, GET_VARIANT_POSITIONS } from '../types';
import axios from 'axios';

export const getCommonPositions = () => async (dispatch) => {
  try {
    const serverResponse = await axios.get('api/positions/common');
    const { positions } = serverResponse.data;
    return dispatch({ type: GET_COMMON_POSITIONS, payload: positions });
  } catch (error) {
    console.log(error);
  }
};

export const getSearchedPositions = (searchFilter) => async (dispatch) => {
  try {
    searchFilter = searchFilter.trim().replace(' ', '+');
    const serverResponse = await axios.get(`api/positions/search?filter=${searchFilter}`);
    const { positions } = serverResponse.data;
    return dispatch({ type: SET_CURRENT_POSITIONS, payload: positions });
  } catch (error) {
    console.log(error);
  }
}

export const getVariantPositions = (id) => async(dispatch) => {
  try {
    const serverResponse = await axios.get(`api/positions/variants/${id}`);
    const { positions } = serverResponse.data;
    return dispatch({ type: GET_VARIANT_POSITIONS, payload: {positions: positions, id: id}});
  } catch(error) {
    console.log(error);
  }
}

// TODO: Add new actions here
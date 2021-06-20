import { CURRENT_POSITION, GET_COMMON_POSITIONS, SWITCH_TO_COMMON } from '../types';
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
    return dispatch({ type: CURRENT_POSITION, payload: positions});
  } catch (error) {
    console.log(error);
  }
}

export const switchToCommonPositions = () => async (dispatch) => {
  return dispatch({ type: SWITCH_TO_COMMON, })
}

// TODO: Add new actions here
import { GET_COMMON_POSITIONS } from '../types';
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

// TODO: Add new actions here
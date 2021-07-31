import { SET_CURRENT_POSITIONS, GET_COMMON_POSITIONS, GET_VARIANT_POSITIONS, GET_CUSTOM_POSITIONS } from '../types';
import axios from 'axios';

export const addCustomPosition = (customPosition) => async (dispatch) => {
  try {
    const serverResponse = await axios.post(`api/customPositions/add`, customPosition);
    const { customPositions } = serverResponse.data;
    return dispatch({ type: GET_CUSTOM_POSITIONS, payload: customPositions });
  } catch (error) {
    console.log(error);
  }
}

export const getCommonPositions = () => async (dispatch) => {
  try {
    const serverResponse = await axios.get('api/positions/common');
    const { positions } = serverResponse.data;
    return dispatch({ type: GET_COMMON_POSITIONS, payload: positions });
  } catch (error) {
    console.log(error);
  }
};

export const getCustomPositions = (ownerId) => async (dispatch) => {
  try {
    const serverResponse = await axios.get(`api/customPositions/get/${ownerId}`);
    const { customPositions } = serverResponse.data;
    return dispatch({ type: GET_CUSTOM_POSITIONS, payload: customPositions });
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

export const deleteCustomPosition = (ownerId, id) => async(dispatch) => {
  try {
    const serverResponse = await axios.delete(`api/customPositions/delete/${ownerId}/${id}`);
    const { customPositions } = serverResponse.data;
    return dispatch({ type: GET_CUSTOM_POSITIONS, payload: customPositions });
  } catch(error) {
    console.log(error);
  }
}

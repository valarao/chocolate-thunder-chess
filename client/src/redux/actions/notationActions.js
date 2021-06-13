import { GET_NOTATION_POSITION } from '../types';

export const getNotationPosition = (notation) => (dispatch) => {
  return dispatch({ type: GET_NOTATION_POSITION, payload: notation });
};

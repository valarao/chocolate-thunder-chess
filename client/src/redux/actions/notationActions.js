import { GET_NOTATION_POSITION } from '../types';

// TODO: Update payload and type for state changes given business logic
export const getNotationPosition = (notation) => (dispatch) => {
  return dispatch({ type: GET_NOTATION_POSITION, payload: notation });
};

// TODO: Add new actions here 
import { GET_NOTATION_POSITION } from '../types';

const initialState = {
  notation: null,
};

const notationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTATION_POSITION:
      return {
        ...state,
        notation: action.payload,
      };
    default:
      return state;
  }
};

export default notationReducer;

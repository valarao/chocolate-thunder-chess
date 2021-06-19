import { GET_COMMON_POSITIONS, SET_CURRENT_POSITION } from '../types';

const initialState = {
  commonPositions: null,
  currentPosition: null,
};

const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMON_POSITIONS:
      return {
        ...state,
        commonPositions: action.payload,
      }
    case SET_CURRENT_POSITION:
      return {
        ...state,
        currentPosition: action.payload,
      };
    default:
      return state;
  }
};

export default positionReducer;

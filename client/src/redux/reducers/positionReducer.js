import { SET_CURRENT_POSITIONS, GET_COMMON_POSITIONS, GET_VARIANT_POSITIONS } from '../types';

const initialState = {
  currentPositions: null,
};

const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMON_POSITIONS:
      return {
        ...state, 
        currentPositions: action.payload,
      }
    case SET_CURRENT_POSITIONS:
      return {
        ...state,
        currentPositions: action.payload,
      }
    case GET_VARIANT_POSITIONS:
      const { id, positions } = action.payload;
      const newState = {...state};
      newState[id] = positions;
      return newState;
    default:
      return state;
  }
};

export default positionReducer;

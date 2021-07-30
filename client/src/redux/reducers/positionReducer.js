import { SET_CURRENT_POSITIONS, GET_COMMON_POSITIONS, GET_VARIANT_POSITIONS, GET_CUSTOM_POSITIONS } from '../types';

const initialState = {
  currentPositions: null,
  customPositions: null,
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

    case GET_CUSTOM_POSITIONS:
      return {
        ...state,
        customPositions: action.payload,
      }
    default:
      return state;
  }
};

export default positionReducer;

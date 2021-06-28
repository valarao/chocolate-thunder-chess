import { SET_CURRENT_POSITIONS, GET_COMMON_POSITIONS, GET_VARIANT_POSITIONS, SET_VISIBLE_POSITIONS } from '../types';

const initialState = {
  currentPositions: null,
  visiblePositions: null,
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
    case SET_VISIBLE_POSITIONS:
      const startIndex = 9 * (action.payload - 1);
      let endIndex = startIndex + 9;
      const positionLength = state.currentPositions.length;

      if (endIndex > positionLength) {
        endIndex = startIndex + (endIndex - positionLength);
      }

      return {
        ...state,
        visiblePositions: state.currentPositions.slice(startIndex, endIndex),
      }
    default:
      return state;
  }
};

export default positionReducer;

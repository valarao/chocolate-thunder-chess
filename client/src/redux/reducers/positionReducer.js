import { CURRENT_POSITION, GET_COMMON_POSITIONS, SWITCH_TO_COMMON } from '../types';

const initialState = {
  currentPositions: null,
  commonPositions: null,
};

const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMON_POSITIONS:
      return {
        ...state, 
        currentPositions: action.payload,
        commonPositions: action.payload,
      }
    case CURRENT_POSITION:
      return {
        ...state,
        currentPositions: action.payload,
      }
      case SWITCH_TO_COMMON:
        return {
          ...state,
          currentPositions: state.commonPositions,
        }
    default:
      return state;
  }
};

export default positionReducer;

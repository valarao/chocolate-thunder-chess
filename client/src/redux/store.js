import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import positionReducer from './reducers/positionReducer';
import thunk from 'redux-thunk';

const initialState = {};
const rootReducer = combineReducers({
  positions: positionReducer,
  // TODO: Add new states reducers here
});

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

export default store;

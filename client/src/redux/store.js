import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import notationReducer from './reducers/notationReducer';
import thunk from 'redux-thunk';

const initialState = {};
const rootReducer = combineReducers({
  notations: notationReducer,
  // TODO: Add new states reducers here
});

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;

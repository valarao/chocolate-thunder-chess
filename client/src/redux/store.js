import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import notationReducer from './reducers/notationReducer';
import thunk from 'redux-thunk';

const initialState = {};
const rootReducer = combineReducers({
    notations: notationReducer,
});

const store = createStore(
    rootReducer,
    initialState, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;

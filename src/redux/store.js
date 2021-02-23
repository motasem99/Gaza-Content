import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'react-redux';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

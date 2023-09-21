import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducers from './authReducers';
import thunk from 'redux-thunk'; // Import redux-thunk

// Combine multiple reducers if your app has more than one
const rootReducer = combineReducers({
  auth: authReducers,
  // Add other reducers here if needed
});

// Apply redux-thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
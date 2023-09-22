import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducers from './authReducers';
import thunk from 'redux-thunk'; 


const rootReducer = combineReducers({
  auth: authReducers,
  
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
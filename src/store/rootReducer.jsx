import { combineReducers } from 'redux';
import { categoryReducer } from './counterSlice';

const rootReducer = combineReducers({
  category: categoryReducer, 
});

export default rootReducer;

import { combineReducers } from 'redux';
import { categoryReducer, dataCategoryReducer } from './counterSlice';

const rootReducer = combineReducers({
  category: categoryReducer, 
  dataCategory: dataCategoryReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import ImageReducer from './ImageReducer';
import SearchNameReducer from './SearchNameReducer';

const rootReducer = combineReducers({
  ImageReducer,
  SearchNameReducer,
});

export default rootReducer;

import {combineReducers} from 'redux';
import UserReducer from './reducer/UserReducer';

const combineReducer = combineReducers({
  user: UserReducer,
});

export default combineReducer;

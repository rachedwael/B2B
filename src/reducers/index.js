import { combineReducers } from 'redux';
import errorReducer from './ErrorReducer';
import authReducer from './authReducer';

export default combineReducers({
    errors: errorReducer,
    auth:authReducer
});
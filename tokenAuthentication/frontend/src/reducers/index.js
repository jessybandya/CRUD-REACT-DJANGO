import {combineReducers} from 'redux';
import lead_reducer from './leads';
import error_reducer from './errors';
import message_reducer from './messages';
import auth_reducer from './auth';
export default combineReducers({
    leads:lead_reducer,
    errors:error_reducer,
    messages:message_reducer,
    auth:auth_reducer
})
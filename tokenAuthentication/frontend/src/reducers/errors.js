import {ERROR_LEAD, ERROR_CLEAR_LEAD} from '../actions/actionType';
const initialState = {
    msg :{},
    status: null
}

const error_reducers = (state = initialState, action)=>{
    switch(action.type){
        case ERROR_LEAD:
            return {
                msg : action.payload.msg,
                status: action.payload.status
            }
        case ERROR_CLEAR_LEAD:
            return {
                msg :{},
                status: null
            }
        default:
            return state
    }
}

export default error_reducers;
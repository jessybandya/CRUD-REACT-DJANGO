import {LEAD_MESSAGE, MESSAGE_CLEAR_LEAD} from '../actions/actionType';
const initialState = null

const message_reducers = (state = initialState, action)=>{
    switch(action.type){
        case LEAD_MESSAGE:
            return {...state,'Lead':action.payload}
        case MESSAGE_CLEAR_LEAD:
            return null
        default:
            return state
    }
}

export default message_reducers;
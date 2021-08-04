import  * as actionType from '../actions/actionType';

const initialState = {
    token : null,
    loading : false
}

const updateObject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties
    }  
}

const authStart = (state, action) => {
    return updateObject(state,{
        loading : true
    })
} 

const authSuccess = (state, action) => {
    return updateObject(state,{
        token : action.token,
        loading : false
    })
}

const authFail = (state, action) => {
    return updateObject(state,{
        loading : false
    })
}

const authLogout = (state, action) => {
    return updateObject(state,{
        token : null
    })
}

const auth_reducer = (state= initialState, action)=> {
    switch(action.type){
        case (actionType.AUTH_START): return authStart(state, action);
        case (actionType.AUTH_SUCCESS): return authSuccess(state, action);
        case (actionType.AUTH_FAIL): return authFail(state, action);
        case (actionType.AUTH_LOGOUT): return authLogout(state, action);
        default:
            return state;
    }
}

export default auth_reducer;
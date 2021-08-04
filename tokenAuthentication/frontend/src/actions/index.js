import * as actionType from './actionType';
import axios from 'axios';
export const leadStart = () =>{
    return {type:actionType.LEAD_START}
}  
export const leadSuccess = () =>{
    return {type : actionType.LEAD_SUCCESS}
}  
export const leadFail = ()=>{
    return {type:actionType.LEAD_FAIL}
}
export const listLead = () => {
    return dispatch => { 
        //dispatch(leadStart())
        axios.get('/api/', {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then(res =>{
            //distpatch(leadSuccess())
            dispatch({
                type: actionType.LIST_LEAD,
                payload : res.data
            })
        })
        .catch(err =>{
            console.log(err.response)
            //dispatch(leadFail())
            dispatch(errorMessage(err.response.data, err.response.status))
        })
    }
}

export const addLead = (Name, Email, Msg) => {
    return dispatch =>{
        dispatch(leadStart())
        let data = JSON.stringify({
            name:Name,
            email:Email,
            message:Msg
        })
        axios.post('/api/',data,{
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res =>{
            dispatch(leadSuccess())
            dispatch({
                type: actionType.ADD_LEAD,
                payload : res.data
            })
            dispatch({type: actionType.LEAD_MESSAGE,
                payload : "LEAD ADDED"})
        })
        .catch(err=> {
            dispatch(leadFail())
            dispatch(errorMessage(err.response.data, err.response.status))
        })
    }
}


export const updateLead = (id, Name, Email, Msg) => {
    return dispatch =>{
        dispatch(leadStart(leadStart()))
        let data = JSON.stringify({
            name:Name,
            email:Email,
            message:Msg
        })
        axios.put(`/api/${id}/`,data,{
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res =>{
            dispatch(leadSuccess())
            dispatch({
                type: actionType.UPDATE_LEAD,
                payload : res.data
            })
            dispatch({
                type: actionType.LEAD_MESSAGE,
                payload: "LEAD UPDATED"
            })
        })
        .catch(err=> {
            dispatch(leadFail())
            dispatch(errorMessage(err.response.data, err.response.status))
        })
    }
}

export const deleteLead = (id) => {
    return dispatch =>{
        dispatch(leadStart())
        axios.delete(`/api/${id}`,{
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then(res=>{
            dispatch(leadSuccess())
            dispatch({
                type: actionType.DELETE_LEAD,
                payload: id
            })
            dispatch({
                type: actionType.LEAD_MESSAGE,
                payload: "LEAD DELETED"
            })
        })
        .catch(err=> {
            dispatch(leadFail())
            dispatch(errorMessage(err.response.data, err.response.status))
        })
    }
}

export const errorClearLead = () => {
    return dispatch =>{
        dispatch({
        type: actionType.ERROR_CLEAR_LEAD,
        })
    }
}
export const messageClearLead = () => {
    return dispatch =>{
        dispatch({
        type: actionType.MESSAGE_CLEAR_LEAD,
        })
    }
}

export const errorMessage= (msg, status)=>{
    return{
        type:actionType.ERROR_LEAD,
        payload: {msg,status}
    }
}
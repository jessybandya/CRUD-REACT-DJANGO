import React, { Fragment, useEffect} from 'react';
import {withAlert} from 'react-alert';
import {useSelector, useDispatch} from 'react-redux';
import { errorClearLead, messageClearLead } from '../../actions';
const Alerts =({alert})=> {
    const error = useSelector(state=>state.errors)
    const message = useSelector(state=>state.messages)
    const dispatch = useDispatch()
    useEffect(()=>{
        if (error.status!=null){
            if (error.msg.non_field_errors){ 
                alert.error(error.msg.non_field_errors)
                dispatch(errorClearLead())}
            if (error.msg.name){ 
                alert.error(`Name: ${error.msg.name.join()}`)
                dispatch(errorClearLead())}
            if (error.msg.email){
                alert.error(`Email: ${error.msg.email.join()}`)
                dispatch(errorClearLead())}
            if (error.msg.message){ 
                alert.error(`Message: ${error.msg.message.join()}`)
                dispatch(errorClearLead())}
            if (error.msg.detail){
                alert.error(error.msg.detail)
                dispatch(errorClearLead())}
            if (error.msg.username){ 
                alert.error(error.msg.username)
                dispatch(errorClearLead())}
        }
        if (message!=null){
            if (message.Lead) alert.success(message.Lead)
            dispatch(messageClearLead())
        }
    }) 
    return (<Fragment/>);
}
 
export default withAlert()(Alerts);
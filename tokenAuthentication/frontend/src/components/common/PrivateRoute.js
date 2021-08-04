import React from 'react';
import { useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom'
const PrivateRoute = ({component: Component, ...rest}) => {
const auth = useSelector(state=> state.auth)
    return (<Route 
        {...rest}
        render = {props=>{
            if (auth.loading){
                return <div className="loader"></div>
            }
            else if(auth.token==null){
                return <Redirect to="/login"/>
            }
            else{
                return <Component {...props}/>
            }
        }}
    />
    )
}

export default PrivateRoute
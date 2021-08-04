import React ,{Fragment}from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as action from '../../actions/auth';
import {errorMessage} from '../../actions/index';
const Login = () => {
    const error = useSelector(state=> state.auth.error)
    const loading = useSelector(state => state.auth.loading)    
    const token = useSelector(state => state.auth.token)    
    const dispatch = useDispatch() 

    if (error){
        dispatch(errorMessage(error.data.detail, error.status))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        dispatch(action.authLogin(email, password))
        
    }
    if (token!==null){
        return <Redirect to="/"/>
    }
    return ( 

         <Fragment>
             <h1>Login Form</h1>
            {
                loading ?
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-2"><div className="loader"></div></div>
                    <div className="col-5"></div>
                </div>
                :
            <form className="mb-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Password:</label>
                    <input type="password" className="form-control" name="password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/register' className="ml-5 btn btn-success">Register</Link>
            </form>
            }
        </Fragment>
     );
}
 
export default Login;
import React ,{Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as action from '../../actions/auth';
import {useDispatch, useSelector} from 'react-redux';
const Header = (props) => {
    const dispatch = useDispatch();
    const [user,setUser] = useState();
    const token = useSelector(state => state.auth.token) 
    const isAuth = token !== null
        
    useEffect(()=>{
        dispatch(action.authCheckState())
            if (isAuth){
                setUser(localStorage.getItem('userName'))
            }
        })
    return ( 
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div  className="container">
                <a className="navbar-brand" href="#">Leads Manager</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    
                    { isAuth ?
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/'><span className="nav-link">Home</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbardrop" data-toggle="dropdown">
                            <span style={{textTransform:'uppercase'}}>{user}</span> 
                            </a>
                            <div className="dropdown-menu">
                                <span className="dropdown-item" onClick={()=>{dispatch(action.logout())}}>Logout</span>
                            </div>
                        </li>
                    </ul>
                    :
                    <ul className="navbar-nav ml-auto">
                        <Link to='/login/'><li className="nav-item">
                            <span className="nav-link">Login</span>
                        </li></Link>
                        <Link to='/register/'><li className="nav-item">
                            <span className="nav-link">Register</span>
                        </li></Link>
                    </ul>
                    }
                </div> 
            </div>
            </nav>
     );
}
 
export default Header;
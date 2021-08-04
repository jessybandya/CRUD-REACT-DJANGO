import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './leads/Dashboard';
import Header from './layout/Header';
import {Provider} from 'react-redux';
import store from '../store';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './layout/Alerts';
import Login from './leads/Login';
import Register from './leads/Register';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import Detail from './leads/Detail';
//Alert Option

const alertOptions = {
    timeout:5000,
    position: 'top center'
}

const App = () => {
    return ( 
        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Router>
                <Fragment>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <PrivateRoute exact path='/' component={Dashboard}/>
                            <Route exact path='/register' component={Register}/> 
                            <Route exact path='/login' component={Login}/>                         
                            <Route exact path='/lead/:leadID/' component={Detail}/>                         
                        </Switch>
                    </div>
                    <Alerts/>
                </Fragment>
            </Router>
            </AlertProvider>
        </Provider>
     );
}
 
ReactDOM.render(<App />, document.getElementById('app'));
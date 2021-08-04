import React ,{Fragment, useEffect, useState, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Form from './Form';
import axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';
import { deleteLead, listLead } from '../../actions';
const Detail = (props) => {
    const leadID = props.match.params.leadID;
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)   
    const loading = useSelector(state => state.leads.loading)   
    const [lead, setLead] = useState();
    const mounted = useRef(false);
    useEffect(() => {       
        if (!mounted.current){
            getRec();
            mounted.current = true;
        }      
    })
    const getRec=()=> {
        axios.get(`/api/${leadID}`, {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
        .then(res =>setLead(res.data))
        .catch(err =>console.log(err))
    }
    const handleDelete=(e)=>{
        e.preventDefault() 
        dispatch(deleteLead(leadID))
        dispatch(listLead())
        props.history.push('/')
    }
    if (token===null){
        return <Redirect to="/login/"/>
    }
    
    
    return(
        <Fragment>
            <form onSubmit={handleDelete} className="mt-3">
                <button className="float-right btn btn-danger" type="submit">Delete</button>
            </form>
            <br clear="all"/>
            <br/>
            <div className="card float-none bg-light">
             
                <div className="card-body">
                { loading===true
                    ?
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-2"><div className="loader"></div></div>
                        <div className="col-5"></div>
                    </div>
                    :
                    <table className="table">
                        <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{lead!==undefined?lead.name:null}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{lead!==undefined?lead.email:null}</td>
                        </tr>
                        <tr>
                            <th>Message</th>
                            <td>{lead!==undefined?lead.message:null}</td>
                        </tr>
                        <tr>
                            <th>on Date</th>
                            <td>{lead!==undefined?lead.created_on:null}</td>
                        </tr>
                        </tbody>
                    </table>
                }
                </div>
            </div>
            <Form lead={lead} leadID={leadID} updated={getRec} requestType="put" btnText="UPDATE"/>
        </Fragment>
    );
}
 
export default withRouter(Detail);
import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { listLead, deleteLead } from '../../actions';
import {Link} from 'react-router-dom';
const Leads = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.leads.lead)
    const loading = useSelector(state=>state.leads.loading)
    useEffect(()=>{
        dispatch(listLead())
    },[dispatch])
    return ( 
        <Fragment>
            <h1>Leads</h1>
            {loading===true
                ?
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-2"><div className="loader"></div></div>
                    <div className="col-5"></div>
                </div>    
                :
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {state.map(lead => (
                        <tr key={lead.id}>
                            <td><Link to={`/lead/${lead.id}`}><h5 className="link">{lead.name}</h5></Link></td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            }
        </Fragment>
     );
}
 
export default Leads;
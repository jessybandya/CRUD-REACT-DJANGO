import React,{Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {addLead, updateLead} from '../../actions'
const Form = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        if (props.lead!==undefined){
            document.getElementById('Name').value = props.lead.name
            document.getElementById('Email').value = props.lead.email
            document.getElementById('Msg').value = props.lead.message
        }
    },[props])
    const handleSubmit =(e, type, Id)=>{
        e.preventDefault();
        const Name = event.target.elements.Name.value;
        const Email = event.target.elements.Email.value;
        const Msg = event.target.elements.Msg.value;
        if (type==="post"){
            dispatch(addLead(Name, Email, Msg))
            document.getElementById('Name').value=''
            document.getElementById('Email').value=''
            document.getElementById('Msg').value=''
        }
        if (type==="put"){
            dispatch(updateLead(Id, Name, Email, Msg))
            props.updated()
        }
    }
    return ( 
        <Fragment>
            
            <h1 className="text-center">Form to {props.btnText} Leads</h1>
            <div className="px-5 py-2">
                <form onSubmit={(e)=> handleSubmit(e, props.requestType, props.leadID)}>
                    <div className="form-group">
                        <label htmlFor="title">Name:</label>
                        <input type="text" className="form-control" name="Name" id="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Email:</label>
                        <input type="email" className="form-control" name="Email" id="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Message:</label>
                        <input type="text" className="form-control" name="Msg" id="Msg"/>
                    </div>
                    <div className="mx-5">
                        <button type="submit" className="btn btn-primary btn-block">{props.btnText}</button>
                    </div>
                </form>
            </div>
        </Fragment>
     );
}
 
export default Form;
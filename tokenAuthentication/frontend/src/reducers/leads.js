import  * as actionType from '../actions/actionType';

const initialState = {
    lead:[],
    loading : false
}
const leadStart = (state, action) => {
    const load = {loading : true}
    return {...state,...load}
} 

const leadSuccess = (state, action) => {
    const load = {loading : false}
    return {...state,...load}
}

const leadFail = (state, action) => {
    const load = {loading : false}
    return {...state,...load}
}

const lead_reducer = (state = initialState, action) =>{

    switch(action.type){
        case (actionType.LIST_LEAD):
            return {
                ...state,
                lead:action.payload
            }
        case (actionType.ADD_LEAD):
            return {
                ...state,
                lead: [...state.lead, action.payload]
            }
        case (actionType.UPDATE_LEAD):
            var leadId = action.payload.id;
            for (let i=0;i<state.lead.length;i++){
                if (state.lead[i].id==leadId){
                    state.lead[i]={...state.lead[i],...action.payload}
                }
            }
            return state
        case (actionType.DELETE_LEAD):
            return{
                ...state,
                lead : state.lead.filter(lead => lead.id !== action.payload)
            }
        case (actionType.LEAD_START): return leadStart(state, action)
        case (actionType.LEAD_FAIL): return leadFail(state, action)
        case (actionType.LEAD_SUCCESS): return leadSuccess(state, action)
        default:
            return state          
    }
}

export default lead_reducer;

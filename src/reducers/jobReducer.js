import * as actions from '../actions/type'
import  {updateObject} from '../util/Utility'   
const INTIAL_STATE={
    loading: false,
    contract:null,
    jobs:null,
    job:null,
    error:null,
    reset:false
}
const jobReducer =(state=INTIAL_STATE,action)=>{
    switch(action.type){
        case(actions.JOB_RESET_START) : return updateObject(state,{reset:true});
        case(actions.JOB_RESET) : return INTIAL_STATE;
        case (actions.JOB_LOAD):return updateObject(state,{loading:false,...more(state,action)});
        case (actions.JOB_START) : return updateObject(state,{loading:true});
        case (actions.JOB_ERROR) : return updateObject(state,{loading:false,...action.data});
        case (actions.JOB_SUCCESS) : return updateObject(state,{loading:false,...action.data}); 
        case(actions.LOAD_END): return updateObject(state,{loading:false,error:null});
        default : return state; 
    }
}

const more= (state,action)=>{
    
    let content=[];
    if(state.jobs === null)
    content=content.concat(action.data.data.content);
    else
    content=state.jobs.content.concat(action.data.data.content);
    
    let data={...action.data.data};
    data.content=content;
    return {jobs:data};
}

export default jobReducer;
import * as ActionType from '../actions/type';
import { updateObject } from '../util/Utility';


const INITIAL_STATE={
    skill:null,
    language:null,
    loading:false,
    error:null
}

const appReducer=(state=INITIAL_STATE,action)=>{
        switch(action.type){
     
            case(ActionType.APP_START): return updateObject(state,{loading:true,error:null});
            
            case(ActionType.APP_SUCCESS): return updateObject(state,{loading:false,...action.data});

            case(ActionType.APP_FAIL) :return updateObject(state,{loading:false,...action.data});

            default:
            return state;
        }
}


export default appReducer;
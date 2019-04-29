import * as ActionType from '../actions/type';
import { updateObject } from '../util/Utility';

const INITIAL_STATE={
    loading:false,
    message:null,
    error:null
};

const signupReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){

        case(ActionType.SIGNUP_START): return updateObject(state,{loading:true,error:null,message:null});
        case(ActionType.SIGN_SUCCESS): return updateObject(state,{loading:false,...action.data});
        case(ActionType.SIGNUP_FAIL):  return updateObject(state,{loading:false,...action.data});

        default:
        return state;
    }
}

export default signupReducer;
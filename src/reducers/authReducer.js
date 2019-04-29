import * as ActionType from '../actions/type'
import {updateObject} from '../util/Utility'

const INITIAL_STATE={
    expired:null,
    token:null,
    loading:false,
    error:null   
}
 const AuthReducer= (state= INITIAL_STATE,action)=>{

    switch(action.type){
        case(ActionType.AUTH_START):
            return updateObject(state,
                {
                loading:true,
                error:null,
                expired:null,
                token:null
               
            });
        case(ActionType.AUTH_FAIL):
            return  updateObject(state,
                {
                loading:false,
                ...action.data
                 });
        case(ActionType.AUTH_SUCCESS):
            return updateObject(state,
                {   loading:false,
                    ...action.data
                });


        case(ActionType.LOGOUT):
           return {...INITIAL_STATE};

        default: return state;
    }

}

export default AuthReducer;
import * as ActionType from '../actions/type'
import {updateObject} from '../util/Utility'

const INITIAL_STATE={
    id:null,
    role:null,
    loading:false,
    error:null   

}
 const meReducer= (state= INITIAL_STATE,action)=>{

    switch(action.type){
        case(ActionType.ME_START):
            return updateObject(state,
                {
                loading:true,
                error:null,
                id:null,
                role:null               
            });
        case(ActionType.ME_FAIL):
            return  updateObject(state,
              {
                loading:false,
                ...action.data
                 });
        case(ActionType.ME_SUCCESS):
            return updateObject(state,
                {   loading:false,error:null,
                    ...action.data
                });


        case(ActionType.UPDATE_PICTURE_START):
                return updateObject(state,{loading:true,error:null});
        case(ActionType.UPDATE_PICTURE_SUCCESS):
                return updateObject(state,{...action.data});
        case(ActionType.UPDATE_PICTURE_FAIL):
        return updateObject(state,{...action.data})
    

        default: return state;
    }

}

export default meReducer;
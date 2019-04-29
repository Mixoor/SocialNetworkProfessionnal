import * as util from '../util/Utility'
import * as ActionType from '../actions/type'


export const signupStart= ()=>{
        return {
            type:ActionType.SIGNUP_START
        }
}

export const signupFail= (error)=>{
    return {
        type:ActionType.SIGNUP_FAIL,
        data:error
    }
}

export const signupSuccess =(data)=>{
    return {
        type: ActionType.SIGN_SUCCESS,
        data
    }
}


export const signOn=(form,type)=>{
    return dispatch=>{
    dispatch(signupStart());    
    let api = '/api/auth/signup/client';
    if(type === 0)
        api = '/api/auth/signup/freelancer';
    let d= util.formDataGenerator(form);
    console.log(d);
        util.postMethod(api,d)
    .then((data)=>{
        dispatch(signupSuccess({message:data.data.message}));
    }).catch(e=>{
        dispatch(signupFail({error:e.response.data.message}));

    });
    }
}
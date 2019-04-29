import * as util from '../util/Utility'
import * as ActionType from '../actions/type'


export const authStart=()=>{
    return{
        type : ActionType.AUTH_START
    }
};

export const authFail=(error)=>{
    return {
        type:ActionType.AUTH_FAIL,
        data:error
    }
};

export const authSuccess=(data)=>{

    return{
        type : ActionType.AUTH_SUCCESS,
        data
    }
}

export const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('expired');
    return{
        type:ActionType.LOGOUT
    }
}
export const logoutCheck=(date)=>{
    return dispatch =>{
        setTimeout(()=>{dispatch(logout())},date);
    }
}

export const authCheck=()=>{
    return dispatch =>{
        let token = localStorage.getItem('token');
        let expired = localStorage.getItem('expired');
        if(token){
            if(new Date() < new Date(expired)){
                dispatch(authSuccess({token,expired}));
               dispatch(logoutCheck(new Date(expired).getTime()-new Date().getTime()));
            }else{
                dispatch(logout());
            }
        }else{
            dispatch(logout());
        }
    }
}



export const auth=(form)=>{
    return dispatch =>{
        dispatch(authStart());
       let formData =util.formDataGenerator(form);
       util.postMethod('/api/auth/signin',formData)
       .then(data=>{
        const d = {
            token: data.data.accessToken,
            expired:data.data.expriredAt

        };
        localStorage.setItem('token',d.token);
        localStorage.setItem('expired',new Date(new Date().getTime()+d.expired));

        dispatch(authSuccess(d));
        dispatch(logoutCheck(d.expired));
       })
       .catch(e=>{
           dispatch(authFail({error:"Email or Password incorrect"}));
    });

    }
}



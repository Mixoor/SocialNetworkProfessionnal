import * as actions from '../actions/type'
import * as util from '../util/Utility'
import axios from 'axios'

export const meStart=()=>{
    return{
        type:actions.ME_START
    }
}

export const meFail=(error)=>{
    return {
        type:actions.ME_FAIL,
        data:error
    }
}

export const meSuccess=(data)=>{
    return {
        type:actions.ME_SUCCESS,
        data:data
    }
}

export const pictureStart=()=>{
    return {
        type:actions.UPDATE_PICTURE_START
    }
}

export const pictureFail=(error)=>{
    return {
        type:actions.UPDATE_PICTURE_FAIL,
        data:error
    }
}

export const pictureSuccess=(data)=>{
    return {
        type:actions.UPDATE_PICTURE_SUCCESS,
        data:data
    }
}




export const getMe=()=>{
    return dispatch=>{
        dispatch(meStart());
        axios.all([getProfile(),getStatic()])

        .then(axios.spread((p,s)=>{
            dispatch(meSuccess({...p.data,...s.data}));
        }))
        .catch(error=>{
           
        
            dispatch(meFail({error:'User invalid'}));
        });
    }
}

export const updatePicture=(file)=>{
    return dispatch =>{
            dispatch(pictureStart);
        setPicture(file).then(data=>{
            dispatch(pictureSuccess({picture:data.data}));
        })  
        .catch(e=>{
            dispatch(pictureFail({error:"Format incorrect !"}));
        });

    }
}

const setPicture=(file)=>{
    const form= new FormData();
    form.set("picture",file);
    return util.securedPostMethod('/api/user/me/picture',form,
    localStorage.getItem("token"));
}

const getProfile=()=>{
    return util.securedGetMethod('/api/user/me/'
    ,localStorage.getItem('token'));

}

const getStatic=()=>{
    return util.securedGetMethod('/api/user/me/static'
    ,localStorage.getItem('token'));

}
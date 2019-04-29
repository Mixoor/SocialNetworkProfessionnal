import * as util from '../util/Utility'
import * as ActionType from '../actions/type'
import axios from 'axios'

export const appStart=()=>{
    return {
        type:ActionType.APP_START
    };
}

export const appFail=(error)=>{
    return {
        type:ActionType.APP_FAIL,
        error
    };
}

export const appSuccess=(data)=>{
    return{
        type:ActionType.APP_SUCCESS ,
        data
    };
}

export const app=()=>{
    return dispatch=>{
        dispatch(appStart());
        axios.all([getSkill(), getLanguage()])
        .then(axios.spread(function (s, l) {
            const language = l.data.map(s=>{return {value:s.id,label:s.name}});
            const skill = s.data.map(s=>{return {value:s.id,label:s.name}});
            dispatch(appSuccess({language,skill}));

      })).catch(e=>{
          dispatch(appFail(e));
      });
       
    }
}

 const  getSkill=()=>{
    const reponse =
      util.getMethod("/api/skill/");
     return reponse;
    }

const getLanguage=()=>{
    const reponse=  util.getMethod("/api/language/");
    return reponse;    
}
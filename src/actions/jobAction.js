import * as util from '../util/Utility'
import * as actions from './type'

export const jobReset=()=>{
    return {
        type:actions.JOB_RESET
    }
}

export const jobResetStart=()=>{
    return{
        type:actions.JOB_RESET_START,
        data:{reset:true}
    }
}

export const jobStart=()=>{
    return {
        type:actions.JOB_START
    }
}

export const loadEnd=()=>{
    return {
        type:actions.LOAD_END
    }
}

export const jobError=(error)=>{
    return {
        type:actions.JOB_ERROR,
        data:error
    }
}

export const jobSuccess=(data)=>{
    return {
        type:actions.JOB_SUCCESS,
        data:data
    }
}

export const jobMore=(data)=>{
    return {
        type:actions.JOB_LOAD,
        data:data
    }
}


export const onReset=()=>{
    return dispatch=>{
        dispatch(jobResetStart());
        dispatch(jobReset());
    }
}

export const getJobById=(id)=>{
    return (dispatch,state) =>{
        console.log(state().job );
        dispatch(jobStart());
        util.securedGetMethod('/api/jobs/'+id,getToken())
        .then(data=>{
            console.log(data.data);

            let d= {job:data.data};
            dispatch(jobSuccess(d)); 
        })
        .catch(error=>dispatch(jobError({error:"Something happend !"})));
    }
}

const getToken=()=>{
    return localStorage.getItem('token');
}

export const getMoreJob=(skill=[],title="",min="",max="",delai="",page="0",size="20",order="DESC")=>{
    return (dispatch) =>{
        dispatch(jobStart());
        const token = getToken();
        const url = "/api/jobs/search?page="+page+"&size="+size+"&skill="+skill.join(",")+"&min="+min+"&max="+max+"&d="+delai+"&head="+title+"&order="+order;

        console.log(url);   
        util.securedGetMethod(url,token)
        .then(data=>{
            setTimeout(()=>dispatch(jobMore({data:data.data})),2000);
        })
        .catch(e=>{
            console.log(e);
            dispatch(jobError({error:"Something happend !"}));
        });
    }
}

export const getInitialJob=(skill=[],title="",min="",max="",delai="",page="0",size="20",order="DESC")=>{
    return (dispatch) =>{
        dispatch(jobStart());
        const token = getToken();
        const url = "/api/jobs/search?page="+page+"&size="+size+"&skill="+skill.join(",")+"&min="+min+"&max="+max+"&d="+delai+"&head="+title+"&order="+order;

        console.log(url);   
        util.securedGetMethod(url,token)
        .then(data=>{
               setTimeout(()=>dispatch(jobSuccess({jobs:data.data})),2000);
        })
        .catch(e=>{
            console.log(e);
            dispatch(jobError({error:"Something happend !"}));
        });
    }
}




export const getByContract=(page="0",size="20")=>{
    return dispatch=>{
        dispatch(jobStart());

        const token = getToken();
        const url = "/api/jobs/contract?page="+page+"&size="+size;
        util.securedGetMethod(url,token)
        .then(data=>{
            dispatch(jobSuccess({contract:data.data}));
        })
        .catch(e=>{
            dispatch(jobError({error:"Something happend !"}));
        })
        

    }
}



export const saveJob =(form)=>{
    return dispatch=>{
        dispatch(jobStart);
        let data= util.formDataGenerator(form);
       
        util.securedPostMethod('/api/jobs/',data,localStorage.getItem('token'))
        .then(data =>{
            dispatch(loadEnd());
        }).catch(e => {
            dispatch(jobError("error"));
        
        }
        )


    }
}
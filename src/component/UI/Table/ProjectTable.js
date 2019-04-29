import React from 'react'
import Loader from '../Loader/Loader'
import {Link} from 'react-router-dom'
import { url } from '../../../util/Utility'


 class  ProjectTable extends React.Component{
     
    
    
    render(){


     const props= this.props;
     let jobs=withEmpty();

     if(!props.job.contract)
        jobs=withEmpty();
     else if(props.job.loading === true) 
        jobs=withLoading();
     else if(props.job.contract.content.length >0)
      jobs=(
            <div className="project shadow">
             <div>
            <span>Title</span>
            {props.job.contract.content.map((job,i)=>{
                return(
                    <span key={"t"+i} className="title-tab">
                       <Link to={"/dashboard/job/"+job.id}>{job.title}</Link>
                    </span>    
                )
            })
         
            }
        </div>
        <div>
            <span>Budget</span>
            {props.job.contract.content.map((job,i)=>{
                return(
                    <span key={"b"+i}>
                    {job.budget+"$"}
               </span>    
                )
            })
         
            }
        </div>
        <div>
            <span>Creator</span>
            {props.job.contract.content.map((job,i)=>{
                return(
                    <span key={"c"+i} className="user-table">
                    <img className="small-img" src={url+"/picture/"+job.client.picture} alt=""/>
                    <Link to={'/profile/'+job.client.id}>{job.client.name}</Link>
                    </span>

                    
                )
            })
         
            }

        </div>
        <div>
            <span>Freelancer</span>
            {props.job.contract.content.map((job,i)=>{
                return(
                    <span key={"f"+i} className="user-table">
                    {job.freelancer !== null ?
                    <><img className="small-img" src={url+"/picture/"+job.freelancer.picture} alt=""/> <Link to={'/profile/'+job.freelancer.id}>{job.freelancer.name}</Link></>
                    : null}
                    </span>  
                )
            })
         
            }
        </div>
        <div>
            <span>Status</span>
              {props.job.contract.content.map((job,i)=>{
                return(
                  <>
                    {job.freelancer !== null ? <span key={"c"+i} className="close">Closed</span>
                    : <span  key={"c"+i} className="wait">Still Open</span>}  
                 </>
                )
            })
         
            }
            

        </div>
    </div>
        );

        
        return(
          {...jobs}
            
        );
     }
}


export default (ProjectTable);

export  const empty=()=>{
    return(
        <div className="empty">
            <img src={process.env.PUBLIC_URL+'/Assets/empty.svg'} alt=""/>               
            <h4>Sorry we couldn't find anything...</h4>
        </div>
    );
}

export const withLoading=()=>{
        return (
    <div className="project shadow">
        <div>
            <span>Title</span>
        </div>
        <div>
            <span>Budget</span>
            <Loader/>
        </div>
        <div>
            <span>Creator</span>
        </div>
        <div>
            <span>Freelancer</span>
        </div>
        <div>
            <span>Status</span>
        </div>
    </div>
);
        }

export const withEmpty=()=>{
    return (<div className="project shadow">
        <div>
            <span>Title</span>
        </div>
        <div>
            <span>Budget</span>
                {empty()}
        </div>
        <div>
            <span>Creator</span>
        </div>
        <div>
            <span>Freelancer</span>
        </div>
        <div>
            <span>Status</span>
        </div>
    </div>);
}

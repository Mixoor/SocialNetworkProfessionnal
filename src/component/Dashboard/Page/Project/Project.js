import React, { Component } from 'react'
import {getJobById} from '../../../../actions/jobAction'
import {connect}from 'react-redux'
import ProjectContainer from './ProjectContainer';
import Loader from '../../../UI/Loader/Loader'
class Project extends Component{

    componentDidMount(){
        let id =this.props.match.params.id;
        this.props.getjob(id);
    }

    render(){
        const {job} = this.props;
        let content= null;


        if(job.loading=== true)
            content=<Loader/>;

        if(job.loading===false && job.job===null)
            content=<h3>Notthing to see Here</h3>
        
        if(job.job !== null)
        content=<ProjectContainer job={job.job}/>


        return(
            
            <div class="sub-main-container projects-container">

            {content}


            </div>
        );
    }

}
const mapDispatchToprops=(dispatch)=>{
    return {
        getjob:(id)=>dispatch(getJobById(id)) 
    }
}
const mapStateToDispatch=(state)=>{
    return {
        job:state.job
    }
}


export default connect(mapStateToDispatch,mapDispatchToprops)(Project);
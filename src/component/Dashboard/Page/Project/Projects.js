import React, { Component } from 'react'
import Dummy from './Dummy/Dummy'
import {connect} from 'react-redux'
import Select from 'react-select'
import {getInitialJob,getMoreJob, onReset} from '../../../../actions/jobAction'
import Empty from '../../../UI/Empty/Empty'
import ProjectItem from './Dummy/ProjectItem';


class Projects extends Component{
    constructor(props){
        super(props);


        this.onHandleChange= this.onHandleChange.bind(this);
        this.onHandleSelect= this.onHandleSelect.bind(this);
        this.onScroll=this.onScroll.bind(this);

        this.state={
            skills:[],  
            skill:[],
            title:"",
            min:"",
            max:"",
            delai:"",
            page:0,
            size:"10",
            order:"DESC",
            scroll:0
        }
    }

     componentDidMount(){
         window.addEventListener('scroll', this.onScroll, false);
         this.getStuff("getInitialJob");
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
      }
    


    onScroll(){
        if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight-500) && !this.props.job.loading && this.props.job.jobs !== null) {
            let page =this.props.job.jobs.content.page;
            //page++;
           // if(page<this.props.job.jobs.totalPages){
            let {skill,title,min,max,delai,size,order}=this.state;
             this.props.getMoreJob(skill,title,min,max,delai,page,size,order);
            //}
        }
    }

    


    getStuff(callback){
        let {skill,title,min,max,delai,size,order}=this.state;
        this.props[callback](skill,title,min,max,delai,0,size,order);
    }
    async onHandleChange(event){
        const target= event.target;
       await  this.setState({
            [target.name]:target.value
        });
        this.getStuff("getInitialJob");
    }
    async onHandleSelect(e){
        let skill=[];
        for(let s of e )
        skill.push(s.value);
       await this.setState({skills:e,skill:skill});
        this.getStuff("getInitialJob");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        if(this.props.job.jobs!==null && prevProps.job.jobs!== null)
        if ( prevProps.job.jobs.content.length < this.props.job.jobs.content.length ) {
            return window.innerHeight + window.scrollY;
        }
        return null;
      }
    
      componentDidUpdate(prevProps, prevState, snapshot) {

        if (snapshot !== null) {
            document.body.scrollTop=document.body.scrollHeight - snapshot;
        }
      }

    render(){
        let stuff=null;
        const {job} = this.props;

        console.log(job);
        if(job.loading && job.jobs === null)
        stuff=<>
                <Dummy/>
                <Dummy/>
                <Dummy/>
            </>
    

        if((!job.loading && job.jobs === null)  )
            stuff=<Empty/>

        

        if(job.jobs !== null)
            stuff=job.jobs.content.map((j,i)=> <ProjectItem key={i} job={j}/>)


        if((job.jobs && job.jobs.content.length===0))
            stuff=<Empty/> 
        
        return(
            <div className="grid-container ">
                <div className="tools-bar"></div>

                <div className="pList"  ref="list">
                    {stuff}
                    {(job.loading && job.jobs !== null) ?
                        <>
                            <Dummy/>
                            <Dummy/>
                            <Dummy/>
                        </>: null}
                </div>



                  <div className="rSide">
                        <div className="rSide-header">
                            <span><i className="fal fa-sliders-h"></i> Filters</span>
                        </div>
                        <div className="rSide-body">
                            <div className="rSide-item">
                            <h5>Skills</h5>

                                <label> 
                                    <Select  isMulti ={true} className="input-size"    value={this.state.skills}
                                                onChange={this.onHandleSelect}
                                        options={this.props.app.skill} name="skills" />
                                </label>
                            </div>
                            <div className="rSide-items">

                                    <div className="rSide-item">
                                            <h5>Order By</h5>
                                            <ul>
                                                <li>
                                                    <label>
                                                        <select name="order" onChange={this.onHandleChange} value={this.state.order}>
                                                            <option value="DESC">   Newest</option>
                                                            <option value="ASC">Oldest</option>

                                                        </select>
                                                    </label>
                                                
                                                </li>
        
                                            </ul>
                                        </div>


                                <div className="rSide-item">
                                    <h5>Delai</h5>
                                    <ul>
                                    <li><label>
                                                <input className="regular-radio " type="radio" name="delai" value="" checked={this.state.delai===""} onChange={this.onHandleChange}/>All
                                            </label></li>
                                        <li><label>
                                                <input className="regular-radio " type="radio" name="delai" value="7" checked={this.state.delai==="7"} onChange={this.onHandleChange}/>Less than week
                                            </label></li>

                                        <li><label><input className="regular-radio " type="radio" name="delai" value="14" checked={this.state.delai==="14"} onChange={this.onHandleChange}/>Between
                                                two week</label></li>
                                        <li><label><input className="regular-radio " type="radio" name="delai" value="31" checked={this.state.delai==="31"} onChange={this.onHandleChange}/>One month</label></li>
                                        <li><label><input className="regular-radio " type="radio" name="delai" value="60" checked={this.state.delai==="60"} onChange={this.onHandleChange}/>More than a month</label></li>
                                    </ul>
                                </div>

                                <div className="rSide-item">
                                    <h5>Budget</h5>
                                    <ul>
                                             <li><label><input className="regular-radio " type="radio" name="max" value="" checked={this.state.max===""} onChange={this.onHandleChange}/>All</label></li>
                                            <li><label><input className="regular-radio " type="radio" name="max" value="100" checked={this.state.max==="100"} onChange={this.onHandleChange}/> Less 100$</label></li>
                                            <li><label><input className="regular-radio " type="radio" name="max" value="500" checked={this.state.max==="500"} onChange={this.onHandleChange}/>Less than 500$</label></li>
                                            <li><label><input className="regular-radio " type="radio" name="max" value="1000" checked={this.state.max==="1000"} onChange={this.onHandleChange}/>Less than 1k$</label></li>
                                            <li><label><input className="regular-radio " type="radio" name="max" value="1000000" checked={this.state.max==="1000000"} onChange={this.onHandleChange}/>More than 1k</label></li>
                                        </ul>
                                </div>


                            </div>

                        </div>


                    </div>

            </div>
            );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getMoreJob:(skill=[],title="",min="",max="",delai="",page="0",size="20",order="DESC")=>dispatch(getMoreJob(skill,title,min,max,delai,page,size,order)),
        getInitialJob:(skill=[],title="",min="",max="",delai="",page="0",size="20",order="DESC")=>dispatch(getInitialJob(skill,title,min,max,delai,page,size,order)),
        resetJob:()=>dispatch(onReset())
    }
}

const mapStateToProps=(state)=>{
    return {
        app:state.app,
        job :state.job
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Projects) ;



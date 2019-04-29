import React, { Component } from 'react';
import * as actions from '../../../actions/jobAction'
import {updatePicture} from '../../../actions/meAction'
import {connect} from 'react-redux'
import {url,getPercentage,toRad} from '../../../util/Utility'
import Stars from '../../UI/Stars/Stars'
import Menu from '../../UI/Menu/Menu';
import ProjectTable from '../../UI/Table/ProjectTable'
import {Link} from 'react-router-dom' 
import CircleChart from '../../UI/Chart/CircleChart';

class Overview extends Component {

    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.nextPage=this.nextPage.bind(this);
        this.prevPage=this.prevPage.bind(this);
        this.state={
            page:0,
            size:8,
            load:false,
        };
        
    }

     componentDidMount(){
        console.log("mount");
          this.props.getjobByContract(this.state.page,this.state.size);
    }



    nextPage(){
        let page= this.state.page;
        page++;
        if(page>= this.props.j.contract.totalPages){
            page=this.props.j.contract.totalPages;
            page--;
        }
        //
        this.setState({page:page});    

    }




    componentDidUpdate(prevProps,prevState){
        if(prevState.page !== this.state.page)
        this.props.getjobByContract(this.state.page,this.state.size);
        
    
    }


    prevPage(){
        let page= this.state.page;
        page--;
        if(page<= 0)
            page=0;

        this.setState({page:page});    
    }


    handleChange(e){
        this.props.setPicture(e.target.files[0]);
    }

     render(){

        let total= 0;
        if(this.props.j.contract !== null)
        total= this.props.j.contract.totalPages;
        
        let page= this.state.page;
        page++;
        const {me}= this.props;
        let table=null;
        
        if( !this.props.j.loading && this.props.j.contract !== null)
            table= <ProjectTable  job={this.props.j}/>;

        return(
            
            <div className="sub-main-container">

                <div className="overview-container">

                    <div className="overview shadow">

                        <div className="prof">
                            <label className="upload">
                            <img src={url+"/picture/"+me.picture} alt={me.name}/>
                            <input type="file" accept="image/png" onChange={this.handleChange} name="picture" className="profile-upload"/>
                            </label>
                            <h5>{me.name}</h5>
                            <Stars stars={me.rating}/>

                        </div>

                        <div className="overview-side">

                            <div>
                                <div className="over-head">
                                    <h5>About Me</h5>
                                    <Menu>
                                        <li><i className="fas fa-pencil"></i>Edit</li>
                                    </Menu>
                                </div>
                                <span className="par">
                                    <p>{me.aboutMe}</p>
                                </span>
                            </div>

                            <div className="info">

                                <h5>Information</h5>

                                <p>
                                    <span>E-mail: {me.email}</span>
                                    <span>Date Of birth: {me.dob}</span>
                                    <span>Country: {me.country}</span>
                                    <span>City: {me.city}</span>

                                </p>
                            </div>

                            <div>
                                <h5>Social</h5>

                                <div className="overview-icons">
                                    <span><Link to="#"><i className="fab fa-facebook"></i></Link></span>
                                    <span><Link to="#"><i className="fab fa-twitter"></i></Link></span>
                                    <span><Link to="#"><i className="fab fa-linkedin"></i></Link></span>
                                    <span><Link to="#"><i className="fab fa-github-square"></i></Link></span>


                                </div>
                            </div>




                        </div>


                    </div>
                    <div className="prod shadow">
                        <div className="chart">
                            <CircleChart width="200" rad="100" height="200" 
                            value={toRad(getPercentage(me.project,me.unfinishedProject)+1)} per={getPercentage(me.project,me.unfinishedProject)} />
                        </div>

                        <div>
                            <span>Finished Job</span>
                            <span>Unfinished Job</span>
                        </div>

                    </div>

                </div>

                <div className="projects">
                 {table}
                 <div className="table-btn">
                 <button onClick={this.prevPage}> {"<< Previous"} </button>
                 <span>Page {page +" of "+total}</span>
                 <button onClick={this.nextPage}>  {"Next >>"} </button>
                 </div>
                </div>

               
            </div>
                   


        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getjobByContract : (page=0,size=8)=>dispatch(actions.getByContract(page,size)),
        setPicture: (file)=>dispatch(updatePicture(file)),
        resetJob:()=>dispatch(actions.onReset())
        
    }
}

const mapStateToProps=(state)=>{
    return {
        
        me:state.me,
        j: state.job
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Overview);



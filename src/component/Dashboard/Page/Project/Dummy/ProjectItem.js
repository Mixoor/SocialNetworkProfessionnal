import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {dateToString} from '../../../../../util/Utility'
import '../Dummy/ProjectItem.css'
import Menu from '../../../../UI/Menu/Menu'

const ProjectItem=(props)=>{

    const heartCss= ["far fa-heart"];
    if(props.job.isFavorite)
    heartCss.push("active-p");

    return(
        <div className="pSummary">
                                <div className="pHeader">
                                    <h4><Link to={"/dashboard/project/"+props.job.id}>{props.job.title}</Link></h4>
                                    <div className="tools">
                                        <span> <i className={heartCss.join(" ")}></i></span>
                                        <Menu>
                                            <ul className="drop-menu shadow">
                                                <li>Edit</li>
                                                <li>Remove</li>
                                                <li>Report</li>
                                            </ul>
                                        </Menu>
                                    </div>
    
                                </div>
                                <div className="menu">
                                    <span><i className="fal fa-user"></i><Link to="#">{props.job.creator.name} | </Link></span>
                                    <span> <i className="fal fa-pencil-alt"></i>{dateToString(props.job.created)} | </span>
                                    <span> <i className="fal fa-wallet"></i>{props.job.budget}$ | </span>
                                    <span> <i className="fal fa-clock"></i>{props.job.delai} days</span>
                                </div>
    
                                <div className="pBody">
                                    <p>{props.job.content}</p>
                                </div>
    
    
    
                                <div className="skill">                                    

                                    {props.job.skills.map((s,i)=> {
                                       return ( <span key={i} className="skill-sapn">{s.name}</span>);
                                    })}
                                   
    
                                </div>
                            </div>
    );

}


export default withRouter(ProjectItem);
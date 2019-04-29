import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../../../UI/Menu/Menu'
import {dateToString,url} from '../../../../util/Utility'
import Stars from '../../../UI/Stars/Stars'

const ProjectContainer =(props)=>{
    const {job}=props;
    console.log(props.job);

    return (
        <div className="project-container">
                <div className="project-information shadow">
                    <div className="p-header">
                        <span><i className="fal fa-info-circle"></i>Information</span>
                        <Menu>
                        <ul className="drop-menu shadow">
                                <li>Edit</li>
                                <li>Remove</li>
                                <li>Report</li>
                            </ul>
                        </Menu>
                            
                      
                    </div>
                    <div className="p-body">
                        <div>
                            <div className="p-profile">
                                <img src={url+"/picture/"+job.creator.picture} alt=""/>
                                <div>
                                    <h4>{job.creator.name}</h4>
                                   <Stars stars={job.creator.vote}/>

                                    <small>{dateToString(job.created)}</small>

                                </div>
                                <div className="p-application">
                                    <button className="button-app"><i className="fal fa-plus-circle"></i>Apply For Job</button>
                                </div>



                            </div>

                            <div>
                                <span className="b-project">budget: </span><span>{job.budget}$</span> |
                                <span className="b-project"> delay: </span>
                                <span>{job.budget} months</span>
                            </div>

                            <div>
                                <span className="b-project"> require:</span>

                            </div>


                            <div className="skill">
                            {job.skills.map(s=><span>{s.name}</span>)}
                                
                            </div>


                            <div>
                                <span className="b-project">Description:</span>

                            </div>
                            <div>
                                <h5 className="p-title"> {job.title}</h5>


                                <p>
                                {job.content}
                                </p>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="project-att shadow">
                    <div className="p-header">
                        <span><i className="fal fa-cloud-download-alt"> </i> Attachements</span>
                    </div>
                    <div className="a-body">
                        <ul>
                            {job.files.map(f=>{
                                return (
                                    <li><a href={f.fileDownloadUri} target={"_blank"}><i className="fal fa-file"></i><span> {f.fileName} - {Math.floor(f.size/1024)}Ko</span></a></li>
                                );
                            })}
                        </ul>
                    </div>

                </div>


            </div>
    );
}


export default ProjectContainer;
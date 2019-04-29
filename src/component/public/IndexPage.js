import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import * as utility from '../../util/Utility';
import validator from '../../util/validator';
import InputForm from '../UI/InputForm/InputForm';
import Toast from '../Toast/Toast';
import * as data from '../../util/SignupData';


class IndexPage extends Component{

    
    _isMounted = false;

    constructor(props){
        super(props);
        this.onSubmit =this.onSubmit.bind(this);
        this.state={
            message:'',
            show:false,
            client:0,
            freelancer:0,
            project:0,
            subject:'',
            content:'',
            email:'',
            valid:false,
            formData:data.contact


        };
        this.onHide= this.onHide.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        const formulaire =utility.formDataGenerator(this.state.formData)
        utility.postMethod("/api/home/",formulaire)
        .then((data)=>{
           this.setState({show:true,message:"Message Send Successufly "});
        }).catch(e=> this.setState({show:true,message:"Error"}));
        this.setState({formData:data.contact});
        
    }

     getStatic(){
        
             utility.getMethod("/api/home/")
            .then(data=>{
                    if(this._isMounted)
                    this.setState({
                        client:data.data.client,
                        freelancer:data.data.freelancer,
                        project:data.data.project}
                        )
                        
                }
                );
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

    onHandler(event,key){
       
        let formDataClone= {...this.state.formData}
        let updatePage= {...formDataClone};
        let updateInput = {...updatePage[key]};

        updateInput.value=event.target.files || event.target.value ;

        updateInput.valid=validator(updateInput.value,updateInput.rules);
        updateInput.first=false;
        updatePage[key]=updateInput;
        formDataClone=updatePage;
        let val =true;
        for(let key in formDataClone )
            if(!formDataClone[key].valid){
                val = false;
                break;
            }
        this.setState({
            valid: val,
            formData:formDataClone
        });

    }


    componentDidMount(){
        this._isMounted = true;
          this.getStatic(); 
    }

    onHide(){
        this.setState({show :false});
    }



    render(){

        let formulaire= [];
        for(let key in this.state.formData){
                formulaire.push({key:key,
                    data: this.state.formData[key]});
        }
        return (

        <Aux>
        {this.state.show ? <Toast onHide={this.onHide} message={this.state.message}/>: null}  
          <div className="main text">
              <div id="d" className="row page">
            
                  <div className="column-6 title">
                  <div className="green"></div>
                      <h2>More description about our website</h2>
                      <p>Lorem ipsum dolor sit amet, et dolore eirmod similique ius, mea eius commune ex, probatus torquatos persecuti quo no.
                           Ad dolorum impedit omittantur vel, sea no eius dolore. Postea insolens mea te.
                           Vim dico doctus at. Te decore splendide qui, vix ei errem ignota.</p>
                    
                      <p>Lorem ipsum is a pseudo-Latin text used in web design,
                           typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.
                      
                      </p>
                           <button className= "button large primary">JOIN US</button>
                  </div>
  
                  <div className="user column-last">
                          <img src="Assets/user.png" alt="User"/>
                  </div>
                  
  
               
              </div>
  
              <div id="inf" className="page information">
                 <div>
                      <i className="fas fa-user-tie fa-xl client-icon"></i>
                      <h3>Client - 0{this.state.client}</h3>
                 </div>
                 <div>
                      <i className="fas fa-users client-icon"></i>
                      <h3>Freelancer - 0{this.state.freelancer}</h3>
                 </div>
                 <div>
                      <i className="fas fa-suitcase client-icon"></i>
                      <h3>Project - 0{this.state.project}</h3>
                 </div>
              
  
             </div>
  
             <div id="contact" className="page contact">
             <form onSubmit={this.onSubmit}>
                      {formulaire.map((form)=>{return <InputForm key={form.key} {...form.data} onChange={(event)=>{this.onHandler(event,form.key)}}/>})}

                  <input type="submit" value="Send" className={this.state.valid ? "button  primary" : "button  primary disabled-btn" } />
                  </form>
             </div>
  
  
          </div>
  
          <div className="footer">
              
              <span>© 2018 5ademni. All rights reserved.</span>
          </div>
  
  
          </Aux>



        );
    }




}

export default IndexPage;

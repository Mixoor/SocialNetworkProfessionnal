import React,{Component} from 'react'
import InputForm from '../../../UI/InputForm/InputForm'
import validator from '../../../../util/validator'
import {connect} from 'react-redux'
import {signOn} from '../../../../actions/signupAction'
import SignupLoader from '../../../SignupLoader/SignupLoader'


class Signup extends Component{
    constructor(props){
        super(props);


        this.onChange= this.onChange.bind(this);
      
        this.state={
            steps:props.step,
            selectedPage:0,
            pages:Object.keys(this.props.form).length,
            valid:false,
            formData:this.props.form
            
        };

    }

    componentDidMount(){
        let page={},skill={},formData={},language= {};
        if(this.props.type=== 0 ){
            page= {...this.state.formData[2]};
            skill ={...page.skill};
            language={...page.language};
           skill.options=this.props.skill;
           language.options=this.props.language;
           page.skill=skill;
           page.language=language;
           formData= {...this.state.formData}
           formData={...formData,2:page};
        }else{
            page= {...this.state.formData[1]};
            language={...page.language};
           language.options=this.props.language;
           page.language=language;
           formData= {...this.state.formData}
           formData={...formData,1:page};
        }
     
        this.setState({formData:formData});
    }

    onChange(event,key){
            
        let selectedPage=this.state.selectedPage;
        let formDataClone= {...this.state.formData}
        let updatePage= {...formDataClone[selectedPage]};
        let updateInput = {...updatePage[key]};
        if(key==="skill"||key==="language" )
            updateInput.value=event;
        else
            updateInput.value=event.target.files || event.target.value ;

        updateInput.valid=validator(updateInput.value,updateInput.rules);
        updateInput.first=false;
        if(key ==="confirm")
        updateInput.valid = updateInput.valid && updatePage["password"].value===updateInput.value;
        

        updatePage[key]=updateInput;
        formDataClone[selectedPage]=updatePage;
        let val =true;
        for(let key in formDataClone[selectedPage] )
            if(!formDataClone[selectedPage][key].valid){
                val = false;
                break;
            }
        this.setState({
            valid: val,
            formData:formDataClone
        });
        
    }

    componentWillReceiveProps(next){
        if(next.error !== this.props.error)
        this.setState({selectedPage: 0,
            formData:this.props.form
        });


    }




    onNext(event){
        event.preventDefault();
      
        let selectedPage = this.state.selectedPage;
        let count= this.state.pages>selectedPage ? ++selectedPage : selectedPage ;
       
        for(let key in this.state.formData[selectedPage])
            if(!this.state.formData[selectedPage][key].valid)
            this.setState({valid:false});
        
        if(this.state.pages-1 === this.state.selectedPage){
            var form ={...this.state.formData[0],...this.state.formData[1]};
            if(this.props.type===0)
            form ={...this.state.formData[0],...this.state.formData[1],...this.state.formData[2]};
             this.props.onSignup(form,this.props.type);
            if(this.props.error)
            count=0;

       }
        this.setState({selectedPage: count});
    }

    onPrev(event){
        event.preventDefault();
        this.setState({valid:true});

        let selectedPage = this.state.selectedPage;
        let count= this.state.selectedPage>0 ? --selectedPage : selectedPage ;
        this.setState({selectedPage:count});
    }

    render(){

    

        let formulaire= [],selectedPage=this.state.selectedPage;
        for(let key in this.state.formData[selectedPage]){
                formulaire.push({key:key,
                    data: this.state.formData[selectedPage][key]});
        }

        let steps= [],i=1;
        for(let key in this.state.steps){
            let classList=["circleral"];
            
            if(i === selectedPage+1)
            classList.push('first');
            
            if(i === selectedPage+2)
            classList.push("next");

            steps.push(  <li key={i} className={classList.join(" ")} data-li={this.state.steps[key]}>{i}</li>);

            i++
        }


        return(  
            <div className="main">
            
                <div className="row">
                    <div className="step-layout column-2-8">
                        <ul className="step">
                            {steps.map(step=>step)}
                        </ul>
                    </div>
                </div>
                <div className="page">
                    <h2>{this.state.steps[selectedPage]}</h2>
                    <div className="row">
                        <div className="column-2-6">
                            <div className="form full" >
                            {this.props.error && <p className="error">{this.props.error}</p>}
                             {formulaire.map((form)=>{return <InputForm key={form.key} {...form.data} onChange={(event)=>{this.onChange(event,form.key)}}/>})}
                              {this.state.pages === this.state.selectedPage ? <SignupLoader message={this.props.message || this.props.error} /> :  null }  

                            </div>
                            {this.state.pages !== this.state.selectedPage ? 
                                   <div className="inline-form border-top form-right">
                                   <input type="submit" id="precedent" className={this.state.selectedPage > 0 ? "button":"button disabled-btn"  }  value="Previous"
                                   onClick={(event)=>this.onPrev(event)} />
                                   <input type="submit" id="next" className={this.state.valid ? "button primary" : "button primary disabled-btn"} value={this.state.pages-1 === this.state.selectedPage ? "Finish":"Next" } 
                                    onClick={(event)=>this.onNext(event)} />
                               </div>
                                : null}
                         

                        </div>
                    </div>

                </div>
              

             </div>
           
                );

    }




}


const mapStateToProps=(state)=>{
    return {
        skill:state.app.skill,
        language:state.app.language,
        loading:state.sign.loading,
        error:state.sign.error,
        message:state.sign.message
    }
}


const mapDispatchToProps=(dispatch)=>{
    return {
        onSignup:(data,type)=>dispatch(signOn(data,type))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);
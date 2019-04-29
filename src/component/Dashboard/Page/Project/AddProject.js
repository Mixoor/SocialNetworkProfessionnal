import React from 'react'
import {connect} from 'react-redux'
import {job} from '../../../../util/SignupData'
import InputForm from '../../../UI/InputForm/InputForm'
import validator from '../../../../util/validator'
import {saveJob} from '../../../../actions/jobAction'
import Loader from '../../../UI/Loader/Loader'

class AddProject extends React.Component{

    constructor(props){
        super(props);

        this.handleForm=this.handleForm.bind(this);

        this.state={
            valid:false,
            formData : job(props.skill)
        } ;

    }


    handleForm(event,key){
        let formDataClone= {...this.state.formData}
        let updateInput = {...formDataClone[key]};

        if(key==="skills" )
            updateInput.value=event;
        else
            updateInput.value=event.target.files || event.target.value ;



        updateInput.valid=validator(updateInput.value,updateInput.rules);
        updateInput.first=false;
   

        formDataClone[key]=updateInput;
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

    submitForm(event){
        event.preventDefault();
        if(this.state.valid)
            this.props.saveJob(this.state.formData);
    }


    render(){

        let formulaire =[];
        for(let key in this.state.formData)
            formulaire.push({
                key,
                data:this.state.formData[key]
            })
        
        let cssList =["button" ,"primary"];
        if(!this.state.valid)
            cssList.push("disabled-btn");
        let form =(
            <form enctype="multipart/form-data" className="srrr" >  
            {formulaire.map(e=>{return <InputForm key={e.key} {...e.data}  onChange={(event)=>this.handleForm(event,e.key)} />})}
           <div className="sees">
           <input type="reset" className="button" value="Cancel"  onClick={()=>{this.setState({valid:false,formData:job(this.props.skill)})}}/>
           <input type="submit" className={cssList.join(" ")} value="Submit"  onClick={(event)=>{ this.submitForm(event)} }/>
           </div>    
    
            </form>);


        if(this.props.job.loading)
        form =<Loader/>
        return(
            <div className="grid-container ">
                <div class="lSide">
                        <div class="rSide-header">
                            <span><i class="far fa-tasks"></i> Add Job</span>
                        </div>
                        <div className="lSide-body">

                        {form}

                        </div>
            </div>
            
            </div>
        );
    }

}


const mapDispatchToProps=(dispatch)=>{
    return {
            saveJob: (form)=> dispatch(saveJob(form))
    }
}
const mapStateToProps=(state)=>{
    return {
        id:state.me.id,
        job:state.job,
        skill:state.app.skill
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddProject);
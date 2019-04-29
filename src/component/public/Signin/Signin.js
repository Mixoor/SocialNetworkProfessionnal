import React,{Component} from 'react';
import * as data from '../../../util/SignupData'
import InputForm from '../../UI/InputForm/InputForm'
import validator from '../../../util/validator'
import {auth} from '../../../actions/authAction'
import {connect} from 'react-redux'
import Loader from '../../UI/Loader/Loader'


class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
            valid:false,
            formData : data.signIn
        };
        this.handleForm= this.handleForm.bind(this);
    }

    handleForm(event,key){
        event.preventDefault();
        const formData={...this.state.formData};
        const updateObj ={...formData[key]};
        updateObj.value=event.target.value;
        updateObj.first=false;
        updateObj.valid=validator(updateObj.value,updateObj.rules);
        formData[key]=updateObj;
        let val =true;
        for(let key in formData )
            if(!formData[key].valid){
                val = false;
                break;
            }
        this.setState({valid:val,formData:formData});
    }

    submitForm(event){
        event.preventDefault();
        if(this.state.valid)
            {this.props.onAuth(this.state.formData);
            }

    }

    render(){

        let redirect= null;
        if(this.props.isAuthenticated)
        this.props.history.push('/');


        let formulaire =[];
        for(let key in this.state.formData)
            formulaire.push({
                key,
                data:this.state.formData[key]
            })
        
        let cssList =["button" ,"primary"];
        if(!this.state.valid)
            cssList.push("disabled-btn");
        const form =(
            <form onSubmit={(event)=>{ this.submitForm(event)} }>  
            {this.props.error!=null ? <p className="alert"><i className="fal fa-exclamation-triangle"></i>{this.props.error}</p> : null }
            {formulaire.map(e=>{return <InputForm key={e.key} {...e.data} onChange={(event)=>this.handleForm(event,e.key)} />})}
           <input type="submit" className={cssList.join(" ")} value="Login"/>    
            </form>);
        
            let all =(
                <div className=" row page">
                <div className="login column-4-7">
                 <h2> Login </h2>
                 {redirect}
                 {form }
             </div>
             </div>
            );

        return (
         
            <div className="main">
                {this.props.loading ?<Loader/> :all}

             </div>
        );
    }


}

const mapDispatchToProps=(dispatch)=>{
    return {
        onAuth: (form)=>{dispatch(auth(form))}
    }
};

const mapStateToProps=(state)=>{
    return {
        error:state.auth.error,
        loading:state.auth.loading,
        isAuthenticated: state.auth.token != null
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (Signin);
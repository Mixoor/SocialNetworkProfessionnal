import React from 'react';
import FileComponent from '../FileComponent/FileComponent';
import Select from 'react-select'

const InputForm = (props)=>{

    let inputElement =null; 
    let valid= props.valid;
    let cName= valid ? "valid input-size"  :  "invalid input-size";
    switch(props.inputtype){
     
        case ('textarea'):
        inputElement= <textarea className={!props.first ? cName : null } id={props.name} name={props.name} 
        onChange={props.onChange}  value={props.value}/>;
        break;

        case ('select'):
        inputElement= <select  onChange={props.onChange}
        value={props.value}>    
        {props.options.map((option,i) =>{
            return <option key={i} value={option.value}>{option.label}</option>
        })}
        </select>;
        break;

        case('file'):
        inputElement= <FileComponent inputClass={!props.first ? cName+" loader-input" : "loader-input"} options={props.options} id={props.name} name={props.name} 
        files={props.value} onFileChange={props.onChange} multiple={props.multiple} />;
        break;
        
        case('tags'):
        inputElement=<Select className={!props.first ? cName+" input-size" : "input-size" }  onChange={props.onChange} value= {props.value} options={props.options} isMulti={true } /> ;
        break;  


        default: 
        inputElement=  <input type={props.type} min="0" step="10" className={!props.first ? cName+" input-size" : "input-size"} id={props.name} name={props.name} 
        onChange={props.onChange}   value={props.value}/>;
    }


    return(
        <div>
        <label htmlFor={props.name}>{props.label}</label>
        {inputElement}
        {props.message ?        
         <span className="low-message">{props.message}</span>    
        : null}
   </div>
    );

};

export default InputForm;
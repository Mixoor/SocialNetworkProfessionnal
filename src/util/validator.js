

export default function validator(value,rules){
    
    let valid = true;
    if(!rules) return true;
    if(!value) return false;

    if(rules.min)
    valid = valid && value.length >= rules.min;

    if(rules.max)
    valid= valid && value.length <= rules.max;

    if(rules.required){
        if(typeof value ==="object" && value)
        valid= valid && value.length > 0 ;
        else 
        valid= valid && value.trim() !== '';
        }

    if(rules.email)
    valid= valid && emailValidator(value);
    
    if(rules.extension){
        for(let i =0 ; i <value.length;i++)
        valid= valid && value[i].type===rules.extension;
    }


    return valid;

} 


const emailValidator= (email)=> {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
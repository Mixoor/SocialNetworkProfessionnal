
export const stepsForFreelancer={
    0:'Generale Information',
    1:'Personnel Information',
    2:'Professional Information',
    3:'Finish'
}

export const stepsForClient={
    0:'Generale Information',
    1:'Personnel Information',
    2:'Finish'
}






export const pageOne= {
    name:{
        inputtype:'input',
        type:'text',
        value:'',
        name:'name',
        label:'Fullname',
        first:true,
        valid:false,
        message:null,
        rules:{
            required:true,
            max:15,
            min:8,
        } 
            
    },
    email:{
        inputtype:'input',
        type:'email',
        value:'',
        name:'email',
        label:'Email',
        first:true,
        valid:false,
        message:null,   
        rules:{
            required:true,
            email:true

        }    
    },
    password:{
        inputtype:'input',
        type:'password',
        value:'',
        name:'password',
        label:'Password',
        first:true,
        valid:false,
        message:"Password must contain 8 character atleast",      
        rules:{
            required:true,
            max:15,
            min:8
        }    
    },
    confirm:{
        inputtype:'input',
        type:'password',
        value:'',
        name:'confirm',
        label:'Confirm Password',
        first:true,
        valid:false,
        message:null,    
        rules:{
            required:true,
            max:15,
            min:8
        }   
    },
    gender:{
        inputtype:'select',
        value:'0',
        name:'gender',
        label:'Gender',
        first:true,
        valid:true,
        message:null,
        options:[
            {value:'0',label:'Male' },
            {value:'1',label:'Female' }
        ] ,
        rules:{
            required:true
        }       
    },
    picture:{
        inputtype:'file',
        value:[],
        name:'picture',
        label:'Picture',
        first:true,
        valid:false,
        options:{
            accept:'image/png'
        },
        multiple:false,
        rules:{
            required:true,
            extension:"image/png"
        } ,
        message:"Picture must be png extension"
    }
};


export const pageTwo={
    aboutMe:{
        inputtype:'textarea', 
        intype:'', 
        value:'',
        name:'aboutme',
        label:'About Me',
        first:true,
        valid:false,
        message:null,
        rules:{
            required:true,
            min:15
        } 
            
    },
    country:{
        inputtype:'input',
        type:'text',
        value:'',
        name:'country',
        label:'Country',
        first:true,
        valid:false,
        message:null,   
        rules:{
            required:true

        }    
    },
    city:{
        inputtype:'input',
        type:'text',
        value:'',
        name:'city',
        label:'City',
        first:true,
        valid:false,
        rules:{
            required:true,
        }    
    },
    adresse:{
        inputtype:'input',
        type:'text',
        value:'',
        name:'adresse',
        label:'Adresse',
        first:true,
        valid:false,
        rules:{
            required:true,
        }    
    },
    dob:{
        inputtype:'input',
        type:'date',
        value:'',
        name:'dob',
        label:'BirthDay',
        first:true,
        valid:false,
        message:null,    
        rules:{
            required:true,
            
        }   
    }
};

export const pageTwoPlus={
    aboutMe:{
        inputtype:'textarea', 
        intype:'', 
        value:'',
        name:'aboutMe',
        label:'About Me',
        first:true,
        valid:false,
        message:null,
        rules:{
            required:true,
            min:15
        } 
            
    },
    country:{
        inputtype:'input',
        type:'text',
        value:'',
        name:'country',
        label:'Country',
        first:true,
        valid:false,
        message:null,   
        rules:{
            required:true

        }    
    },
    city:{
        inputtype:'input',
        type:'text',
        value:'',
        name:'city',
        label:'City',
        first:true,
        valid:false,
        rules:{
            required:true,
        }    
    },
    adresse:{
        inputtype:'input',
        type:'text',
        value:'',
        name:'adresse',
        label:'Adresse',
        first:true,
        valid:false,
        rules:{
            required:true,
        }    
    },
    dob:{
        inputtype:'input',
        type:'date',
        value:'',
        name:'dob',
        label:'BirthDay',
        first:true,
        valid:false,
        message:null,    
        rules:{
            required:true,
            
        }   
    },
    language:{
        inputtype:'tags', 
        intype:'', 
        value:null,
        options:[],
        name:'language',
        label:'Language',
        first:true,
        valid:false,
        message:"",
        rules:{
            required:true,
            min:1
            
        } 
            
    }
};



export const pageThree={
    skill:{
        inputtype:'tags', 
        intype:'', 
        value:null,
        options:[],
        name:'skill',
        label:'Skills',
        first:true,
        valid:false,
        message:"you need to fill between 6-10",
        rules:{
            required:true,
            min:6,
            max:10
        } 
            
    },
    language:{
        inputtype:'tags', 
        intype:'', 
        value:null,
        options:[],
        name:'language',
        label:'Language',
        first:true,
        valid:false,
        message:"",
        rules:{
            required:true,
            min:1
            
        } 
            
    }
};


export const contact={
    subject:{
        inputtype:'input',
        type:'text',
        value:'',
        name:'subject',
        label:'Subject',
        first:true,
        valid:false,
        message:null,   
        rules:{
            required:true,
            min:8

        }  
    },
    email:{
        inputtype:'input',
        type:'email',
        value:'',
        name:'email',
        label:'Email',
        first:true,
        valid:false,
        message:null,   
        rules:{
            required:true,
            email:true

        }    
    },
    content:{
        inputtype:'textarea', 
        intype:'', 
        value:'',
        name:'content',
        label:'Content',
        first:true,
        valid:false,
        message:null,
        rules:{
            required:true,
            min:15
        } 
            
    }
};

export const freelancerSignup={
    0:{...pageOne},
    1:{...pageTwo},
    2:{...pageThree}
};

export const clientSignup={
0:{...pageOne},
1:{...pageTwoPlus},

};


export const signIn={
    email:{
        inputtype:'input',
        type:'email',
        value:'',
        name:'email',
        label:'Email',
        first:true,
        valid:false,
        message:null,   
        rules:{
            required:true,
            email:true

        }    
    },
    
    password:{
        inputtype:'input',
        type:'password',
        value:'',
        name:'password',
        label:'Password',
        first:true,
        valid:false,
        rules:{
            required:true,
            max:15,
            min:8
        }    
    }
}


export const job=(data)=>{
    return {

            title:{
                inputtype:'input',
                type:'text',
                value:'',
                name:'title',
                label:'Title',
                first:true,
                valid:false,
                message:null,   
                rules:{
                    required:true,
                    min:15
                }   
            },
            description:{
                inputtype:'textarea', 
                intype:'', 
                value:'',
                name:'description',
                label:'Description',
                first:true,
                valid:false,
                message:null,
                rules:{
                    required:true,
                    min:25
                } 
                    
            },
            delai:{
                inputtype:'input',
                type:'number',
                value:'0',
                name:'delai',
                label:'Delai',
                first:true,
                valid:false,
                message:"Delai is in days",
                rules:{
                    required:true

                }    
            },
            budget:{
                inputtype:'input',
                type:'number',
                value:'0',
                name:'budget',
                label:'Budget',
                first:true,
                valid:false,
                message:"Budget is in dollar",
                rules:{
                    required:true

                }    
            },
            skills:{
                inputtype:'tags', 
                intype:'', 
                value:null,
                options:data,
                name:'skills',
                label:'Skills',
                first:true,
                valid:false,
                message:"you need to fill more than 6 tags",
                rules:{
                    required:true,
                    min:6
                } 
                    
            },
            files:{
                inputtype:'file',
                value:[],
                name:'files',
                label:'Files',
                first:true,
                valid:true,
                options:{
                    accept:'*'
                },
                multiple:true,
               
                message:"Files size limited to 200mb"
            }

        };
}
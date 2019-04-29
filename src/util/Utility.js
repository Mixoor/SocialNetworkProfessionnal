import axios from 'axios'



export const url = 'http://localhost:5000';
axios.defaults.baseURL=url;

export const securedPostMethod=(url,data,token)=>{
        return axios.post(
            url,data,{
                headers:{
                    Authorization: 'Bearer '+token,
                }
          
            }
        );  
}

export const securedPutMethod=(url,data,token)=>{
    return axios.put(
        url,data,{
            headers:{
                Authorization: 'Bearer '+token,
            }
      
        }
    );  
}

export const securedDeleteMethod=(url,token)=>{
    return axios.delete(
        url,{
            headers:{
                Authorization: 'Bearer '+token,
            }
      
        }
    );  
}

export const postMethod=(url,data)=>{
    return axios.post(
        url,
        data
    );
}



export const getMethod=(url)=>{
    return axios.get(
        url
    );
}


export const securedGetMethod=(url,token)=>{
    return axios.get(
        url,{
            headers:{
                Authorization: 'Bearer '+token
            }
        }
    );
}

export const formDataGenerator= (data)=>{
    const formData= new FormData();
    for(let key in data){
        let value= data[key].value
        let values=[];

        if(key ==="picture")
            value= data[key].value[0];
        else if(data[key].inputtype === 'tags'){
            for(let i of value )
            formData.append(key,i["value"]);

        }
        else if(data[key].name === 'files'){
            for(let i of value )
            formData.append(key,i);

        }else{
       
        formData.append(key,value);

        }
        
    }
    for(let key of formData)
        console.log(key);
    return formData;
}

export const updateObject=(oldObj,newVal)=>{
     return {
        ...oldObj,
        ...newVal
    };
}


export const getPercentage=(v,t)=>{
     t = v+t;
    if(t===0)
        return 0;
    else 
        return v/t*100; 
}
export const toRad=(v)=>{
    return (1.5*Math.PI)+((2*Math.PI*v)/100);
}



export const dateToString=(date)=>{
    const now =new Date().getTime();
     date = now-new Date(date).getTime();

    if(date/31540000000 >=1)
        return Math.floor(date/31540000000)+" years ago";

    if(date/2628000000>=1)
        return Math.floor(date/2628000000)+" months";
    
    if(date/86400000 >=1)
        return Math.floor(date/86400000)+" days ago";
    
    if(date/3600000 >=1)
        return Math.floor(date/3600000)+" hours ago";

    return Math.floor(date/60000)+" minutes ago";
}



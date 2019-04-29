import React ,{Component} from 'react' 
import '../FileComponent/FileComponent.css'
import PropTypes from 'prop-types'
import file from './icons/file.svg'



export default class FileComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
            loading:false,
            dragging: false,
            files:this.props.files,
            src:[]
        };

        this.dropRef = React.createRef();
    }

    handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
      }
      handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
      }
      handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
      }
      handleDrop = (e) => {    
        e.preventDefault()
        e.stopPropagation()

        let f =Array.from(e.dataTransfer.files).splice(0,1);
    
        if(this.props.multiple)
           f = e.dataTransfer.files;

        this.props.onFileChange(e,f);
      }


    async getFilePicture(e){
        
        const ar= [];
       
        if(e.length>0){
        this.setState({loading:true});
    
        for(var i= 0;i<e.length;i++){
            let f= e[i];
          if(f.type.startsWith("image")){
           await  this.loaderFile(f)
                .then((f)=>{
                    ar.push(f);
                })
            }else{
                ar.push("icons/"+f.type.substr(f.type.indexOf('/')+1)+".svg");
            }
            
        }
        this.setState({files:e,
            src:ar,loading:false
        });  
    }
        
    }
     

    loaderFile(file){
        return new Promise((resolve,reject)=>{
            var reader = new FileReader();
            reader.onload=(e)=>{
                resolve( reader.result);
           };
           reader.onerror=(e)=>{
               reject(e.error);
               
           }
           reader.readAsDataURL(file);

        })
      
    }

   

    componentDidUpdate(prevProps,prevState){
  
        if(this.props.files !== prevProps.files)
            this.getFilePicture(this.props.files);
    }
     
    componentDidMount(){
        this.getFilePicture(this.state.files);

        let div = this.dropRef.current
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)

    }

    componentWillUnmount() {
        let div = this.dropRef.current
        div.removeEventListener('dragenter', this.handleDragIn)
        div.removeEventListener('dragleave', this.handleDragOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
      }

  

    render(){

        
        let files = []; 
        let  i=0;
         for(let i=0 ; i< this.state.files.length;i++){
            let f= this.state.files[i];

             files.push( 
                <div key={"img-"+i} className="img">
        

                <img  key={i}  className="preview" onError={(e)=>{e.target.onerror = null; e.target.src='/Assets/icons/file.svg' }} src={"/Assets/icons/"+this.state.src[i]} alt={i}/>

               <div className="loader-inf">
                <span>
                {f.name}
                </span>
                <span>{Math.floor( f.size/1024)} Ko</span>
                </div>
                </div>
                );

        }





        return (
            <div className={this.props.inputClass}  ref={this.dropRef}>
                {this.state.loading ?  <img alt="refresh" className="refresh" src="/Assets/icons/refresh.svg"/>:null }
                <label  className="loader-box">
                <i> + </i>
                
                    <input   {...this.props.options} multiple={this.props.multiple} type="file" name="file" onChange={(e)=>{this.props.onFileChange(e,null);}}/>
                </label>
            
            
                 { this.state.files.length ? files:null} 

            </div>


        );
    }



}

FileComponent.propTypes={
    inputClass : PropTypes.string,
    files: PropTypes.any.isRequired,
    multiple:PropTypes.bool,
    onFileChange:PropTypes.func.isRequired
};

FileComponent.defaultProps={
    inputClass:"loader-input",
    multiple:false
};

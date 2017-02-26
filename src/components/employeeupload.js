import React,{Component} from 'react';

class UploadFile extends Component {
    constructor(){
        super();
        this.readFile = this.readFile.bind(this);
        this.upload = this.upload.bind(this);
        this.state = {
            fileData:''
        }
    }
    readFile(e){
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (event)=> {
         this.setState({
            fileData:event.target.result.split('\n')
         })
        };
        reader.readAsText(file);
    }
    upload(){
        let {fileData} = this.state;
        if(fileData!==""){
            this.props.add(fileData)
        }
    }
    render(){
        return(
            <div className="col-md-12">
                <div className="col-md-4">
                    <input type="file" accept=".csv" style={{margin:'12px 0px'}} onChange={this.readFile}/> 
                </div>
                <div className="col-md-4">
                    <button className="btn btn-default" onClick={this.upload}>Upload<i className="glyphicon glyphicon-upload"></i></button>
                </div>
            </div>

        )
    }
}

export default UploadFile;
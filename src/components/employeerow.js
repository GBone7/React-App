import React,{Component} from 'react';

class Row extends Component{
    constructor(){
        super();
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
    }
    edit(){
        let user = {
            email:this.props.email,
            firstName:this.props.firstName,
            lastName:this.props.lastName,
            id:this.props.id
        }
        this.props.edit(user)
    }
    remove(){
        this.props.remove(this.props.id);
    }
    render(){
        let {email,firstName,lastName,gender} = this.props;
        return(
            <tr>
                    <td>{firstName +'.'+ lastName}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td><button className="btn btn-primary" onClick={this.edit}>Edit</button></td>
                    <td><button className="btn btn-primary" onClick={this.remove}>Delete</button></td>
                </tr>
        )
    }
}

export default Row;
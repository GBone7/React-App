import React, { Component } from 'react';

class EditEmployee extends Component{
    constructor(){
        super();
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    updateEmployee(e){
       e.preventDefault();

       let employee = {
        id:this.props.employee.id,
        email:this.refs.email.value,
        firstName:this.refs.first.value,
        lastName:this.refs.last.value
       }

       this.props.update(employee)
    }
    render(){
        let{email,firstName,lastName} = this.props.employee;
        let{edit} = this.props;
        let element = <div></div>;
        if(edit){
            element = <div className="col-md-12">
                <h2>Edit User</h2>
                <form>
                <div className="form-group col-md-6">
                    <label>Email address</label>
                    <input ref="email" type="email" className="form-control" placeholder="Email" defaultValue={email}/>
                </div>
                <div className="form-group col-md-6">
                    <label >FirstName</label>
                    <input ref="first" type="text" className="form-control" placeholder="FirstName" defaultValue={firstName}/>
                </div>
                <div className="form-group col-md-6">
                    <label >LastName</label>
                    <input ref="last" type="text" className="form-control" placeholder="LastName" defaultValue={lastName}/>
                </div>
                <div className="col-md-12">
                    <button type="submit" className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                </div>
                
            </form>
            </div>  
        }
return(
    <div>{element}</div>
)
        
    }
}

export default EditEmployee;
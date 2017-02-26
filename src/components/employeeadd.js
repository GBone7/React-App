import React, { Component } from 'react';

class AddEmployee extends Component{
    constructor(){
        super();
        this.addEmployee = this.addEmployee.bind(this);
        this.radioClick = this.radioClick.bind(this);
        this.state = {
            gender:''
        }
    }
    addEmployee(e){
        e.preventDefault();
        let{email,first,last} = this.refs;
        let{gender} = this.state;
        let employee = {
            firstName:first.value,
            lastName:last.value,
            email:email.value,
            gender:gender
        }
        this.props.add(employee);
        email.value = '';
        first.value = '';
        last.value = '';
    }
    radioClick(e){
        if(e.target.checked){
            this.setState({
                gender:e.target.value
            })
        }
    }
    render(){
        return(
            <div className="col-md-12">
                <h2>Add User</h2>
                <form>
                <div className="form-group col-md-6">
                    <label>Email address</label>
                    <input ref="email" type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                    <label >FirstName</label>
                    <input ref="first" type="text" className="form-control" placeholder="FirstName"/>
                </div>
                <div className="form-group col-md-6">
                    <label >LastName</label>
                    <input ref="last" type="text" className="form-control" placeholder="LastName"/>
                </div>
                <div className="form-group col-md-6">
                    <label>
                    Gender
                    </label>
                    <div>
                        <input className="" type="radio" name="radio" value="M" onChange={this.radioClick}/> M&nbsp;  
                        <input type="radio" name="radio" value="F" onChange={this.radioClick}/> F
                    </div>
                </div>
                <div className="col-md-12">
                    <button type="submit" className="btn btn-success" onClick={this.addEmployee}>Add</button>
                </div>
                
            </form>
            </div>
            
        )
    }
}

export default AddEmployee;
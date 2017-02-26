import React, { Component } from 'react';


class EmployeeSearch extends Component{
    constructor(){
        super();
        this.search = this.search.bind(this);
    }
    search(e){
        e.preventDefault();
        let{email,first,last} = this.refs;
        if(email.value===""){
            email.focus();
        } else if(first.value===""){
            first.focus();
        } else if(last.value===""){
            last.focus()
        } else {
            let employee = {
            lastName:last.value.toLowerCase(),
            firstName:first.value.toLowerCase(),
            email:email.value.toLowerCase()
        }
        this.props.search(employee);
        }
        
    }
    render(){
        return(
            <div className="col-md-12">
                <h2>Search users</h2>
                <form>
                <div className="form-group col-md-6">
                    <label>Email address*</label>
                    <input ref="email" type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                    <label >FirstName*</label>
                    <input ref="first" type="text" className="form-control" placeholder="FirstName"/>
                </div>
                <div className="form-group col-md-6">
                    <label >LastName*</label>
                    <input ref="last" type="text" className="form-control" placeholder="LastName"/>
                </div>
                <div className="col-md-12">
                    <button type="submit" className="btn btn-success" onClick={this.search}>Search</button>
                </div>
            </form>
            </div>
        )
        
    }
}

export default EmployeeSearch;
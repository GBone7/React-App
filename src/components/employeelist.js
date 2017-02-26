import React,{ Component } from 'react';
import { browserHistory } from 'react-router';
import Row from './employeerow';

class EmployeeList extends Component{
    constructor(){
        super();
        this.removeEmployee = this.removeEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.state = {
            edit:false
        }
    }
    removeEmployee(id){
        this.props.remove(id);

    }
    editEmployee(user){
        this.props.forUpdate(user);
    }

    updateEmployee(user){
        this.props.update(user);
    }
    componentWillMount(){
        if(!this.props.authenticated){
            browserHistory.push('/');
        } else {
            this.props.getAll();
        }
        
    }

    render(){
        let {employees} = this.props;
        let tbody = <tr><td colSpan="5" style={{textAlign:'center'}}>No employees...</td></tr>;
        if(employees.length!==0){
           tbody = employees.map((emp)=>{
            return (
                <Row key={emp.id} {...emp} edit={this.editEmployee} remove={this.removeEmployee}></Row>
            )
        })
        }  
        
        return(
            <div className="col-md-12">
                <h2>User list</h2>
            <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {tbody}
            </tbody>
        </table>
        </div>
        )
    }
}

export default EmployeeList;
import React, { Component } from 'react';
import EmployeeAdd from '../container/employeeaddition';
import EmployeeList from '../container/employeelists';
import EmployeeUpload from '../container/employeeuploadcontainer';
import EditEmployee from '../container/employeeupdate';

class EmployeeManagement extends Component{
    render(){
        return(
            <div className="col-md-12">
                <EmployeeAdd/>
                <EmployeeUpload/>
                <EditEmployee/>
                <EmployeeList/>
            </div>
        )
    }
}

export default EmployeeManagement;
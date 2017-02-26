import EmployeeSearch from '../container/empsearchcontainer';
import React,{Component} from 'react';
import EmployeeList from '../container/employeelists';
import EditEmployee from '../container/employeeupdate';

class EmployeeSearchManage extends Component{
    render(){
        return(
        <div>
        <EmployeeSearch/>
        <EditEmployee/>
        <EmployeeList/>
        </div>
        )
    }
}

export default EmployeeSearchManage;
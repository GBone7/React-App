import {removeEmployee,getEmployees,updateEmployee,employeeForUpdate} from '../actions/index';
import EmployeeList from '../components/employeelist';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
      remove:removeEmployee,
      getAll:getEmployees,
      update:updateEmployee,
      forUpdate:employeeForUpdate
    },dispatch);
}
const mapStateToProps = (state)=>({
  employees:state.employees.list,
  edit:state.employees.edit,
  authenticated:state.authenticated   
})
const List = connect(mapStateToProps,mapDispatchToProps)(EmployeeList);
export default List;
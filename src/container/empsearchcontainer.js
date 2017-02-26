import {searchEmployee} from '../actions/index';
import EmployeeAdd from '../components/employeesearch';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({search:searchEmployee},dispatch);
}
const mapStateToProps = (state)=>({
  employees:state.employees,
  authenticated:state.authenticated 
})
const AddEmployee = connect(mapStateToProps,mapDispatchToProps)(EmployeeAdd);
export default AddEmployee;
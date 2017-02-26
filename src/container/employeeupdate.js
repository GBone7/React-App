import {updateEmployee} from '../actions/index';
import EmployeeEdit from '../components/employeeedit';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({update:updateEmployee},dispatch);
}
const mapStateToProps = (state)=>({
  employee:state.employees.user,
  edit:state.employees.edit  
})
const EditEmployee = connect(mapStateToProps,mapDispatchToProps)(EmployeeEdit);
export default EditEmployee;
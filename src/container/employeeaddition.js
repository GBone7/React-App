import {addEmployee} from '../actions/index';
import EmployeeAdd from '../components/employeeadd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({add:addEmployee},dispatch);
}

const AddEmployee = connect(null,mapDispatchToProps)(EmployeeAdd);
export default AddEmployee;
import {uploadEmployees} from '../actions/index';
import EmployeeUpload from '../components/employeeupload';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({add:uploadEmployees},dispatch);
}

const UploadEmployee = connect(null,mapDispatchToProps)(EmployeeUpload);
export default UploadEmployee;
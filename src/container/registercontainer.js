import {registerUser} from '../actions/index';
import Register from '../components/register';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({register:registerUser},dispatch);
}
const mapStateToProps = (state)=>({
  authenticated:state.authenticated  
})
const RegisterScreen = connect(mapStateToProps,mapDispatchToProps)(Register);
export default RegisterScreen;
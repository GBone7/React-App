import {validateUser} from '../actions/index';
import Login from '../components/login';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({validate:validateUser},dispatch);
}
const mapStateToProps = (state)=>({
  authenticated:state.authenticated  
})
const LoginScreen = connect(mapStateToProps,mapDispatchToProps)(Login);
export default LoginScreen;
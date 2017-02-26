import React,{Component} from 'react';
import { browserHistory , Link} from 'react-router';
class Login extends Component{
  constructor(){
    super();
    this.validateUser = this.validateUser.bind(this);
  }
  componentWillReceiveProps(next){
      if(next.authenticated){    
          browserHistory.push('/employee');
      }
  }
  validateUser(e){
      e.preventDefault();
      let email = this.refs.email.value;
      let password = this.refs.password.value;
      if(email===''){
          this.refs.email.focus();
      } else if(password===''){
          this.refs.password.focus();
      } else {
        this.props.validate(email,password);
      }
  }
  render(){
      

      return(
        <div className="col-md-offset-4 col-md-4">
                <h2>Login</h2>
                <form>
                <div className="form-group col-md-12">
                    <label>Email address</label>
                    <input ref="email" type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group col-md-12">
                    <label >Password</label>
                    <input ref="password" type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group col-md-12">
                    <button type="submit" className="btn btn-success" onClick={this.validateUser}>Login</button>
                </div>
                <div className="form-group col-md-12">
                    
                </div>
                <div className="form-group col-md-12">
                    <span>
                        <Link to="/register" >No account? Register here.</Link>
                    </span>
                </div>
                
            </form>
            
            </div>
      )
  }
}

export default Login;
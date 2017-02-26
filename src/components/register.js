import React,{Component} from 'react';
import {Link} from 'react-router';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            message:''
        }
        this.registerUser = this.registerUser.bind(this);
    }
    registerUser(e){
        e.preventDefault();
        let {email,password} = this.refs;
        if(email.value===''){
            this.refs.email.focus();
        } else if(password.value===''){
            this.refs.password.focus();
        } else {
            let user = {
                email:email.value,
                password:password.value
            }
            this.props.register(user);
            this.setState({
                message:"Successfully registered. Please click login to continue"
            })
        }
    }
    render(){
        return(
            <div className="col-md-offset-4 col-md-4">
                <h2>Register</h2>
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
                    <button type="submit" className="btn btn-primary" onClick={this.registerUser}>Register</button>
                </div>
                <div className="form-group col-md-12">
                    <span style={{color:'green'}}>{this.state.message}</span>
                </div>
                <div className="form-group col-md-12">
                    <span>
                        <Link to="/">Registered? login here.</Link>
                    </span>
                </div>
                
            </form>
            </div>
        )
    }
}

export default Register;
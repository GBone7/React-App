import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component{
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-inverse">
                <div className="navbar-header">
                    <div className="navbar-brand">User Management</div>
                </div>
                <ul className="nav navbar-nav">
                    <li role="presentation" ><IndexLink to="/employee" activeClassName="active">Add Employee</IndexLink></li>
                    <li role="presentation"><Link to="/employee/search" activeClassName="active">Search</Link></li>
                </ul>
                </nav>
        {this.props.children}
            </div>
        )
    }
}

export default Nav;
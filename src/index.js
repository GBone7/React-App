import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers';
import NavBar from './components/navbar';
import Login from './container/logincontainer';
import Register from './container/registercontainer';
import EmployeeManagement from './components/employeemanage';
import EmployeeSearch from './components/employeemanagesearch';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';


const store = createStore(reducer)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={Login}></IndexRoute>
            <Route path="register" component={Register}></Route>
            <Route path="employee" component={NavBar}>
              <IndexRoute component={EmployeeManagement}></IndexRoute>
              <Route path="search" component={EmployeeSearch}></Route>
            </Route>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

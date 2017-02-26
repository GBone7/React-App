import { combineReducers } from 'redux'
import list from './employeelist'
import validate from './validateuser'

const EmployeeApp = combineReducers({
  employees:list,
  authenticated:validate
})

export default EmployeeApp

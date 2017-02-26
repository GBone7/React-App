let list = [{firstName:'Eric',lastName:'Cartman',email:'eric@cart.com',gender:'M',id:1}];
let user = {
  email:'',
  firstName:'',
  lastName:'',
  id:0
};
let uniqueId = 1;
const EmployeeList = (state = {list,edit:false,user}, action) => {
  switch (action.type) {  
    case 'ADD_EMPLOYEE':
    uniqueId+=1;
    action.employee.id = uniqueId;
    list = [...list,action.employee];
    return Object.assign({}, state, {
        list: list,
        edit:false
      });

    case 'REMOVE_EMPLOYEE':
    for(let i=0;i<list.length;i++){
      if(list[i].id===parseInt(action.id,10)){
        list.splice(i,1);
      }
    }
   return Object.assign({}, state, {
        list: [...list],
        edit:false
      });

    case 'GET_EMPLOYEES':
    state.edit = false;
    state.list = list;
    return Object.assign({}, state, {
        list: list,
        edit:false
      });

    case 'UPDATE_EMPLOYEE':
    for(let i=0;i<list.length;i++){
      if(list[i].id===parseInt(action.user.id,10)){
        list[i].firstName = action.user.firstName;
        list[i].email = action.user.email;
        list[i].lastName = action.user.lastName;
      }
    }
    return Object.assign({}, state, {
        list: [...list],
        edit:false
      });
    
    case 'SEARCH_EMPLOYEE':
    let array = [];
    state.edit = false;
    let {email,lastName,firstName} = action.employee;
    for(let emp of list){
      if(emp.email.toLowerCase().indexOf(email)>-1 && emp.firstName.toLowerCase().indexOf(firstName)>-1 && emp.lastName.toLowerCase().indexOf(lastName)>-1){
        array.push(emp);
        break;
      }
    }
    return Object.assign({}, state, {
        list: array,
        edit:false
      });

    case 'UPLOAD_EMPLOYEE':
    let earray = action.employee;
    let object = {};
    state.edit = false;
    
    if(earray.length>1){
      for (let i = 1;i<earray.length-1;i++){
        uniqueId+=1;
        let temp = earray[i].split(',');
        object = {
          firstName:temp[1],
          lastName:temp[2],
          email:temp[0],
          gender:temp[3],
          id:uniqueId
        }
        list = [...list,object];
      }
      
    }
    return Object.assign({}, state, {
        list: list,
        edit:false
      });

    case 'EMPLOYEE_UPDATION':
    return Object.assign({}, state, {
        user: action.user,
        edit:true
      });

    default:
      return state;
  }
}

export default EmployeeList;

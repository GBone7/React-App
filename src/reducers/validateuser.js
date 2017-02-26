let users = [{email:'a@b.com',password:'abcd'}];
const validate = (state = false, action) => {
  switch (action.type) {  
    case 'AUTHENTICATE_USER':
    let status = false
    for (let user of users){
      if(user.email===action.email && user.password===action.password){
        status=true;
      }
    } 
    return status;
    case 'REGISTER_USER':
    let {email,password} = action.user;
    let user = {
      email,
      password
    };
    users = [...users,user]; 
    return state;
    default:
      return state;
  }
}

export default validate;

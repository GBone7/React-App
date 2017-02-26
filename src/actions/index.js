export const removeEmployee = (id)=>{
    return({
        type:'REMOVE_EMPLOYEE',
        id
    })
}

export const addEmployee = (employee)=>{
    return({
        type:'ADD_EMPLOYEE',
        employee
    })
}

export const searchEmployee = (employee)=>{
    return ({
        type:'SEARCH_EMPLOYEE',
        employee
    })
}

export const getEmployees = ()=>{
    return ({
        type:'GET_EMPLOYEES'
    })
}

export const validateUser = (email,password)=>{
    return ({
        type:'AUTHENTICATE_USER',
        email,
        password
    })
}

export const uploadEmployees = (employee)=>{
    return({
        type:'UPLOAD_EMPLOYEE',
        employee
    })
}

export const registerUser = (user)=>{
    return({
        type:'REGISTER_USER',
        user
    })
}

export const updateEmployee = (user)=>{
    return({
        type:'UPDATE_EMPLOYEE',
        user
    })
}

export const employeeForUpdate = (user)=>{
    return({
        type:'EMPLOYEE_UPDATION',
        user
    })
}
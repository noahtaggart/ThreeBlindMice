//temporary state
const applicationState = {

}

//export transient state
export const transientState= () => {
    return applicationState
}
//sets API server location
const API = "http://localhost:8088"

//fetches employees from the database. stores it in applicationState
export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
        .then(response => response.json())
        .then(
            (employees) => {
                applicationState.employees = employees
            }
        )
}

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
        .then(response => response.json())
        .then(
            (computers) => {
                applicationState.computers = computers
            }
        )
}

export const fetchDepartments = () => {
    return fetch(`${API}/departments`)
        .then(response => response.json())
        .then(
            (departments) => {
                applicationState.departments = departments
            }
        )
}

export const fetchLocations = () => {
    return fetch(`${API}/locations`)
    .then(response => response.json())
    .then(
        (locations) => {
            applicationState.locations = locations
        }
    )
}

export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
    .then(response => response.json())
    .then(
        (customers) => {
            applicationState.customers = customers
        }
    )
}

export const fetchEmployeeCustomers = () => {
    return fetch(`${API}/employeeCustomers`)
    .then(response => response.json())
    .then(
        (employeeCustomers) => {
            applicationState.employeeCustomers = employeeCustomers
        }
    )
}

//exports copies of database arrays
export const getEmployees = () => {
    return applicationState.employees.map(employee => ({...employee}))
}
export const getComputers = () => {
    return applicationState.computers.map(computer => ({...computer}))
}
export const getDepartments = () => {
    return applicationState.departments.map(department => ({...department}))
}
export const getLocations = () => {
    return applicationState.locations.map(location => ({...location}))
}
export const getCustomers = () => {
    return applicationState.customers.map(customer => ({...customer}))
}
export const getEmployeeCustomers = () => {
    return applicationState.employeeCustomers.map(employeeCustomer => ({...employeeCustomer}))
}

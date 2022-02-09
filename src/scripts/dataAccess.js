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

//exports copies of database arrays
export const getEmployees = () => {
    return applicationState.employees.map(employee => ({...employee}))
}
export const getComputers = () => {
    return applicationState.computers.map(computer => ({...computer}))
}
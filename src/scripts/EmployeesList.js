import { getComputers, getEmployees } from "./dataAccess.js";

//function to iterate through employee array and render as HTML
export const EmployeeComputerList = () => {
    const employees = getEmployees()
    let html = `
        <ul>
            ${employees.map(matchEmployeeToComputer).join("")}
        </ul>`
    
return html
}

//function to match computer to employee and write html
export const matchEmployeeToComputer = (employee) => {
    const computers = getComputers()
    //match employee to iterated computers

    const matchedComputer = computers.find(computer => computer.id === employee.computerId)

    let html = `<li class="employeeList" value="${employee.id}">
        ${employee.lastName}, ${employee.firstName} is using computer #${matchedComputer.id}, ${matchedComputer.model}, from ${matchedComputer.year}
    </li>
    `
return html
}
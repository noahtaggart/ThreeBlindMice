import { getComputers, getDepartments, getEmployees } from "./dataAccess.js";

//function to iterate through employee array and render as HTML
export const EmployeeComputerList = () => {
    const employees = getEmployees()
    let html = `
        <ul>
            ${employees.map(matchEmployeeToComputerAndDepartment).join("")}
        </ul>`
    
return html
}

//function to match computer to employee and write html
export const matchEmployeeToComputerAndDepartment = (employee) => {
    const computers = getComputers()
    const departments = getDepartments()
    //match employee to iterated computers

    const matchedComputer = computers.find(computer => computer.id === employee.computerId)
    const matchedDepartment = departments.find(department => department.id === employee.departmentId)

    let html = `<div class="employee">
    <header class="employee__name">
        <h1>${employee.firstName} ${employee.lastName}</h1>
    </header>
    <section class="employee__computer">
        Currently using a ${matchedComputer.year} ${matchedComputer.model}
    </section>
    <section class="employee__department">
        Works in the ${matchedDepartment.departmentName} department
    </section>
</div>
    `
return html
}
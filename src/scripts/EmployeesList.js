import { getComputers, getDepartments, getEmployees, getLocations } from "./dataAccess.js";

//function to iterate through employee array and render as HTML
export const EmployeeComputerList = () => {
    const employees = getEmployees()
    let html = `
        <ul>
            ${employees.map(matchEmployeeToComputerAndDepartmentAndLocation).join("")}
        </ul>`
    
return html
}

//function to match computer to employee and write html
export const matchEmployeeToComputerAndDepartmentAndLocation = (employee) => {
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()
    //match employee to iterated computers

    const matchedComputer = computers.find(computer => computer.id === employee.computerId)
    const matchedDepartment = departments.find(department => department.id === employee.departmentId)
    const matchedLocation = locations.find(location => location.id === employee.locationId)

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
    <section class="employee__location">
        Works at the ${matchedLocation.locationName} office
    </section>
</div>
    `
return html
}
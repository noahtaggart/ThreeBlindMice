import { getComputers, getCustomers, getDepartments, getEmployeeCustomers, getEmployees, getLocations } from "./dataAccess.js";

//function to iterate through employee array and render as HTML
export const EmployeeComputerList = () => {
    const employees = getEmployees()
    let html = `
        <ul>
            ${employees.map(matchEmployeeToComputerAndDepartmentAndLocationAndCustomers).join("")}
        </ul>`
    
return html
}

//function to match computer to employee and write html
export const matchEmployeeToComputerAndDepartmentAndLocationAndCustomers = (employee) => {
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()
    const customers = getCustomers()
    const customerRelationships = getEmployeeCustomers()
    //match employee to iterated computers

    const matchedComputer = computers.find(computer => computer.id === employee.computerId)
    const matchedDepartment = departments.find(department => department.id === employee.departmentId)
    const matchedLocation = locations.find(location => location.id === employee.locationId)

    //match relationships to employee
        //itterate through relationships
        //filter customerRelationship.employeeIds with employee.id
    const relationships = customerRelationships.filter(customerRelationship => customerRelationship.employeeId === employee.id )
        //find the related customer for each relationship
    const assignedCustomers = relationships.map(relationship => {
        return customers.find(customer => customer.id === relationship.customerId)
    })
    const listItems = assignedCustomers.map(assignedCustomer => {
        return `<li>${assignedCustomer.name}</li>`
    })

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
    <section class="employee__customers">
        Has worked for the following customers.
        <ul>
            ${listItems.join("")}
        </ul>
    </section>
</div>
    `
return html
}
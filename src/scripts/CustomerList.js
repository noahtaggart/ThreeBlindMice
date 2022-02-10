import { getComputers, getCustomers, getDepartments, getEmployeeCustomers, getEmployees, getLocations } from "./dataAccess.js";

//function to iterate through employee array and render as HTML
export const CustomerList = () => {
    const customers = getCustomers()
    let html = `
        <ul>
            ${customers.map(matchCustomertoEmployees).join("")}
        </ul>`
    
return html
}

//function to match computer to employee and write html
export const matchCustomertoEmployees = (customer) => {
    
    const employees = getEmployees()
    const customerRelationships = getEmployeeCustomers()

    //match relationships to employee
        //itterate through relationships
        //filter customerRelationship.employeeIds with employee.id
    const relationships = customerRelationships.filter(customerRelationship => customerRelationship.customerId === customer.id )
        //find the related customer for each relationship
    const assignedEmployees = relationships.map(relationship => {
        return employees.find(employee => employee.id === relationship.employeeId)
    })
    const listItems = assignedEmployees.map(assignedEmployee => {
        return `<li>${assignedEmployee.firstName} ${assignedEmployee.lastName}</li>`
    })

    let html = `<div class="employee">
        <section class="customers__assignedEmployees">
        ${customer.name} has these employees assigned to them:
        <ul>
            ${listItems.join("")}
        </ul>
    </section>
</div>
    `
return html
}
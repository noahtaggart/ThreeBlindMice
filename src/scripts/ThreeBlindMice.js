import { CustomerList } from "./CustomerList.js";
import { EmployeeComputerList } from "./EmployeesList.js";

export const ThreeBlindMice = () => {
    return `
        <h1>Employee Assignments</h1>
        <section class="employeeComputerList">
        ${EmployeeComputerList()}
        </section>
        <h2>Customer's Employees</h2>
        <section class="customersEmployees">
        ${CustomerList()}
        </section>
        `
        
        
}
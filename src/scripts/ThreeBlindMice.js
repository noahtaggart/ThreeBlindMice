import { EmployeeComputerList } from "./EmployeesList.js";

export const ThreeBlindMice = () => {
    return `
        <h1>Employee Computer Assignment</h1>
        <section class="employeeComputerList">
        ${EmployeeComputerList()}
        </section>`
}
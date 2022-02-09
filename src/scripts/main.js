import { fetchComputers, fetchCustomers, fetchDepartments, fetchEmployeeCustomers, fetchEmployees, fetchLocations } from "./dataAccess.js";
import { ThreeBlindMice } from "./ThreeBlindMice.js"

//targets main container to render in index.html
const mainContainer = document.querySelector("#container")

//function to render html
const render = () => {
    fetchEmployees()
    .then(() => fetchComputers())
    .then(() => fetchDepartments())
    .then(() => fetchLocations())
    .then(() => fetchCustomers())
    .then(() => fetchEmployeeCustomers())
    .then(() => {
        mainContainer.innerHTML = ThreeBlindMice()
    })
}

render()
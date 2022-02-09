import { getComputers } from "./dataAccess.js";

export const Computers = () => {
    const computers = getComputers()
        let html = `<ul>`

        const listItems = computers.map(computer => {
            return `<li value="${computer.id}">
            
            </li>`
        })
}
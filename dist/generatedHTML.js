const fs = require('fs');
//const manager = require("../src");
function generateManagers(manager){
    return `${manager.role}
    ${manager.name}
    ${manager.email}
    ${manager.email}
    ${manager.id}
    ${manager.officeNumber}`
}

function generatedHTML (managers, engineers, interns) {
    return`


            ${managers.map(generateManagers).join("/n")}
            
    
    `;
    
};


module.exports = generatedHTML;
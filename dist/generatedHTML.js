const fs = require('fs');
//const manager = require("../src");
function generateManagers(manager){
    return `
    ${manager.role}
    ${manager.name}
    ${manager.email}
    ${manager.id}
    ${manager.officeNumber}`
}

function generateEngineers (engineer) {
    return `
    
    ${engineer.role}
    ${engineer.name}
    ${engineer.email}
    ${engineer.id}
    ${engineer.github}
    
    ` 
}

function generateInterns (intern) {

    return `
    ${intern.role}
    ${intern.name}
    ${intern.email}
    ${intern.id}
    ${intern.shool}

    `
}


function generatedHTML (managers, engineers, interns) {
    return`
        
        ${managers.map(generateManagers).join("/n")}

        ${engineers.map(generateEngineers).join("/n")}

        ${interns.map(generateInterns).join("/n")}
            
    
    `;
    
};


module.exports = generatedHTML;
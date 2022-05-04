const fs = require('fs');
//const manager = require("../src");
function generateManagers(manager){
    return `
    
   
    ${manager.name}
    ${manager.id}
    ${manager.email}
    ${manager.officeNumber}
    
        
    `

}

function generateEngineers (engineer) {
    return `
    
    
    ${engineer.name}
    ${engineer.email}
    ${engineer.id}
    ${engineer.github}
    
    ` 
}

function generateInterns (intern) {

    return `
    ${intern.name}
    ${intern.email}
    ${intern.id}
    ${intern.shool}

    `
}


function generatedHTML (managers, engineers, interns) {
    return`
        Manager : 
        ${managers.map(generateManagers).join("/n")}

        Engineer :
        ${engineers.map(generateEngineers).join("/n")}

        Interns:
        ${interns.map(generateInterns).join("/n")}
            
    
    `;
    
};


module.exports = generatedHTML;
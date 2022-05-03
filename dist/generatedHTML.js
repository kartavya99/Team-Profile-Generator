const fs = require('fs');
//const manager = require("../src");

function genMan (manager) {
    return`
    ${manager.role}
    ${manager.name}
    `
}


function generatedHTML (managers, engineers, interns) {
    return`

    Hello team!!
    

   ${genMan}
   ${managers.name}
     

    `
};


module.exports = generatedHTML;
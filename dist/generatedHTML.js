const fs = require('fs');
//const manager = require("../src");


function generatedHTML (managerArr, engineerArr, internArr) {
    return`

    Hello team!!
   1 ${managerArr.name}
   2 ${managerArr}
     

    `
};


module.exports = generatedHTML;
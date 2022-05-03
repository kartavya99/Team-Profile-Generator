const fs = require('fs');
//const manager = require("../src");

const managerHTML = managerArr => {
    for (let i = 0; managerArr.length>i; i++) {
        return `${managerArr[i]}`;
    };
};

function generatedHTML (managerArr, engineerArr, internArr) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css">
    <title>Team Profil Generator</title>

    </head>
    <body>

    <p> Hello welcome to my team </p>
    ${managerHTML(managerArr[1])}
    
</body>
</html> `
};


module.exports = generatedHTML;
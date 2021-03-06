const fs = require('fs');

// Created function to access manager's data
function generateManagers(manager){
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
         Manager : ${manager.name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee Id : ${manager.id}</li>
        <li class="list-group-item">Email : <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
    </div>
    <br>
    `
}

// Created function to access Engineers's data
function generateEngineers (engineer) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
      Engineer : ${engineer.name} 
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee Id : ${engineer.id}</li>
      <li class="list-group-item">Email : <a href="mailto:${engineer.email}">${engineer.email}</a></li>
      <li class="list-group-item">Github :<a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.name}'s GitHub Profile</a></li>
    </ul>
  </div>
  <br>
    
    ` 
}

// Created function to access Interns's data
function generateInterns (intern) {

    return `

    <div class="card" style="width: 18rem;">
    <div class="card-header">
      Intern : ${intern.name}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Employee Id : ${intern.id}</li>
      <li class="list-group-item">Email : <a href="mailto:${intern.email}">${intern.email}</a></li>
      <li class="list-group-item">School : ${intern.school}</li>
    </ul>
  </div>
  <br>

    `
}

// GeneratedHTML function imported from index.js file line number 92

function generatedHTML (managers, engineers, interns) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>

    </head>
    <body>
    <header>
            <h1>Team Profile Generator</h1>
        </header>
        <div class="container">
            <div class="row">
                <div class="col">
                <h2>Managers</h2>
                <hr>
                ${managers.map(generateManagers).join("\n")}
                </div>
                <div class="col">
                <h2>Engineers</h2>
                <hr>
                ${engineers.map(generateEngineers).join("\n")}
                </div>
                <div class="col">
                <h2>Interns</h2>
                <hr>
                ${interns.map(generateInterns).join("\n")}   
                </div>
            </div>
        </div>
   
    </body>
    </html>
    `
    
};


module.exports = generatedHTML;
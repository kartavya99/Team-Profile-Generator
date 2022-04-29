const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");

let mangerArr= [];

const EmployeeQuestions = [
    {
        type : "list",
        name : "role",
        message : "Please select the role of the employee below",
        choices: ["Manager" , "Engineer" , "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: "Please enter the name of the employee"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the name of the ID number"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the name of the employee email address"
    },
]

const managerQuestions = [
    {
        type: "input",
        name : "officeNumber",
        message: "Please enter Office number"
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "Please enter Github username"
    }        

]

const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "please enter name of the school"
    }
]


function userInput(){
    inquirer
    .prompt(EmployeeQuestions)
    .then((answers => {
        console.log(answers);
        
    }))
};

console.log(userInput());
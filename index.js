const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const { off } = require("process");

let mangerArr= [];
let engineerArr = [];
let internArr = [];

const questions = [
    {   type : "list",
        name : "role",
        message : "Please select the role of the employee below",
        choices: ["Manager" , "Engineer" , "Intern"]
    },
    {   type: "input",
        name: "name",
        message: "Please enter the name of the employee"
    },
    {   type: "input",
        name: "id",
        message: "Please enter the name of the ID number"
    },
    {   type: "input",
        name: "email",
        message: "Please enter the name of the employee email address"
    },
    {   type: "input",
        name : "officeNumber",
        message: "Please enter Office number",
        when: (officeNumber) => {(officeNumber.role === "Manager");},
        validate: () =>{
            if(officeNumber) {
                return true;
            } else {
                console.log("Please enter valid office number");
            }
        }       
    },
    {   type: "input",
        name: "github",
        message: "Please enter Github username",
        when: (github) => {(github.role === "Engineer");},
    },
    {   type: "input",
        name: "school",
        message: "please enter name of the school",
        when: (school) => {(school.role === "Intern");}
    },
    {
        type: "confirm",
        name: "confirmEmployee",
        message: "Would you like to add new employee details?",
        default : false
    }    
]

 
function employeeData(){
    
    let employee;
    let role;
    let name;
    let id;
    let email;
    let github;
    let school;
    let officeNumber;

    inquirer
    .prompt(questions)
    .then((answers) => {
    if(role === "Manager"){
        employee = new Manager(name, id, email, officeNumber);
        //return mangerArr;
        console.log("thank you entering employee details");
    } else if(role === "Engineer"){
        employee = new Engineer(name, id, email, github);
        //return engineerArr;
        console.log("thank you entering employee details");
    } else if(role === "Intern") {
        employee = new Intern(name, id, email, school);
        //return internArr;
        console.log("thank you entering employee details");
    }
    });
};

console.log(employeeData());
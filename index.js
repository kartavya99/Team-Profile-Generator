const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const emailValidator = require("email-validator");


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
        message: "Please enter the name of the employee (Required)",
        validate : (name) => {
            if(name) {
                return true;
            } else {
                return "Please enter the name of the employee";
            }
        }
    },
    {   type: "input",
        name: "id",
        message: "Please enter the name of the ID number of employee (Required)",
        validate : (id) => {
            if (isNaN(id)) {
                return "Please entre the employee identification number";
            } else {
                return true;
            }
        }
    },
    {   type: "input",
        name: "email",
        message: "Please enter the name of the employee email address (Required)",
        validate : (email) => {
            if (emailValidator.validate(email)){
                return true;
            } else {
                return "Please enter a valid email address."
            }
        }
    },
    {   type: "input",
        name : "officeNumber",
        message: "Please enter Office number",
        when: (officeNumber) => officeNumber.role === "Manager",
        validate: (officeNumber) =>{
            if(isNaN(officeNumber)) {
                return "Please enter valid office number";
            } else {
                return true;
            }
        }       
    },
    {   type: "input",
        name: "github",
        message: "Please enter Github username",
        when: (github) => github.role === "Engineer",
        validate:(github) => {
            if (github) {
                return true;
            } else {
                console.log("please enter Github username");
                return false;
            }

        }
    },
    {   type: "input",
        name: "school",
        message: "please enter name of the school",
        when: (school) => school.role === "Intern",
        validate:(school) => {
            if (school) {
                return true;
            } else {
                console.log("please enter school name");
                return false;
            }
        }
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
    let manager;
    let engineer;
    let intern;

    return inquirer.prompt(questions)
    .then((answers) => {
    if(role === "Manager"){
        manager = new Manager(name, id, email, officeNumber);
        //return mangerArr;
        mangerArr.push(manager);
        console.log("thank you entering employee details");
    } else if(role === "Engineer"){
        engineer = new Engineer(name, id, email, github);
        //return engineerArr;
        engineerArr.push(engineer);
        console.log("thank you entering employee details");
    } else if(role === "Intern") {
        intern = new Intern(name, id, email, school);
        //return internArr;
        internArr.push(intern);
        console.log("thank you entering employee details");
    } else if (answers.confirmEmployee) {
        return employeeData();
    } 
    });
};

employeeData();
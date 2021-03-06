const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const emailValidator = require("email-validator");
const generatedHTML = require('./dist/generatedHTML');

//created empty arrays to store employee details bases on their role
let managerArr= [];
let engineerArr = [];
let internArr = [];


// Using Inquire package to prompt questions for employee details
const questions = [
    {   type : "list",
        name : "role",
        message : "Please select the role of the employee below",
        choices: ["Manager" , "Engineer" , "Intern"]
    },
    {   type: "input",
        name: "name",
        message: "Please enter the name of the employee (Required)",
        validate : (name) => name ? true : console.log("please enter the name of the employye")
       
    },
    {   type: "input",
        name: "id",
        message: "Please enter the name of the ID number of employee (Required)",
        validate : (id) => (!isNaN(id)) ? true : console.log("Please entre the employee identification number")
        
    },
    {   type: "input",
        name: "email",
        message: "Please enter the name of the employee email address (Required)",
        validate : (email) => (emailValidator.validate(email)) ? true : console.log("Please enter a valid email address")
        
        
    },
    {   type: "input",
        name : "officeNumber",
        message: "Please enter Office number",
        // Using when functionality of Inquire package to ask certain question based on employye role
        when: (officeNumber) => officeNumber.role === "Manager",
        validate: (officeNumber) => (!isNaN(officeNumber)) ? true : console.log("Please enter a valid office number")
    },
    {   type: "input",
        name: "github",
        message: "Please enter Github username",
        // Using when functionality of Inquire package to ask certain question based on employye role
        when: (github) => github.role === "Engineer",
        validate:(github) => github ? true : console.log("please enter Github username")
    },
    {   type: "input",
        name: "school",
        message: "please enter name of the school",
        // Using when functionality of Inquire package to ask certain question based on employye role
        when: (school) => school.role === "Intern",
        validate:(school) => school ? true : console.log("Please enter school name")
    },
    {
        type: "confirm",
        name: "confirmEmployee",
        message: "Would you like to add new employee details?",
        default : false
    }    
]


// creat function to check the ID number used before it or not.
 


// EmployyeData function collects infromation from question prompt and trasnfer details into generatedHTML file.
function employeeData(){
    
    inquirer.prompt(questions)
    .then((answers) => {
    console.log(answers);
    if(answers.role === "Manager"){
       let  manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        //return managerArr;
        managerArr.push(manager);
        console.log("thank you entering employee details");
    } if(answers.role === "Engineer"){
         let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        //return engineerArr;
        engineerArr.push(engineer);  
        console.log("thank you entering employee details");
    } if(answers.role === "Intern") {
       let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        //return internArr;
        internArr.push(intern);
        console.log("thank you entering employee details");
    } if (answers.confirmEmployee === true) {
        return employeeData();
    } else {
        return writeToFile(generatedHTML(managerArr, engineerArr, internArr));
        console.log(managerArr, engineerArr, internArr);
        //return (managerArr, engineerArr, internArr);
    }
    });
   
};

employeeData();


// WriteTOFile function to creat file with a path 

function writeToFile(data){
    fs.writeFile("./dist/index.html", data, (error) => error ? console.log(erro) : console.log("index.html has been generated."));
};


module.exports = {
    managerArr,
    engineerArr,
    internArr,
}
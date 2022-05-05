// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// school
// getSchool()
//getRole() overridden to return Intern

const Employee = require("./employee");
const Engineer = require("./engineer");

class Intern extends Employee {
    constructor(name, id, email, school){

        super(name, id, email);
        this.school = school;
    }

    getRole(){
        return "Intern"
    }

    getSchool(){
        return this.school;
    }
   
}

const intern = new Intern;

intern.getName();
intern.getId();
intern.getEmail();

module.exports = Intern;
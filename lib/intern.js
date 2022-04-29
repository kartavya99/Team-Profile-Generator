// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// school
// getSchool()
//getRole() overridden to return Intern

const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, role, school){

        super(name, id, email, role);
        this.school = school;
    }

    getRole(){
        return this.role;
    }

    getSchool(){
        return this.school;
    }
   
}

const intern = new Intern;

intern.getName();
intern.getId();
intern.getEmail();
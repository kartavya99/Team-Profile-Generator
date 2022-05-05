
//n addition to `Employee`'s properties and methods, `Engineer` will also have the following:
//GitHub username
//getGithub()
//getRole() overridden to return `'Engineer'`

const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github){

        super(name, id, email, github);
        this.github = github;
    }

    getRole(){
        return "Engineer"
    }

    getGithub(){
        return this.github;
    }

}

const engineer = new Engineer;

engineer.getName();
engineer.getId();
engineer.getEmail();


module.exports = Engineer;

//n addition to `Employee`'s properties and methods, `Engineer` will also have the following:
//GitHub username
//getGithub()
//getRole() overridden to return `'Engineer'`

const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub){

        super(name, id, email, role);
        this.gitHub =gitHub;
    }

    getRole(){
        return this.role;
    }

    getGithub(){
        return this.github;
    }

}

const engineer = new Engineer;

engineer.getName();
engineer.getId();
engineer.getEmail();
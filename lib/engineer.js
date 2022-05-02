
//n addition to `Employee`'s properties and methods, `Engineer` will also have the following:
//GitHub username
//getGithub()
//getRole() overridden to return `'Engineer'`

const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub){

        super(name, id, email);
        this.gitHub = gitHub;
    }

    getRole(){
        return Engineer;
    }

    getGithub(){
        return this.gitHub;
    }

}

const engineer = new Engineer;

engineer.getName();
engineer.getId();
engineer.getEmail();

module.exports = Engineer;
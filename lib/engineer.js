
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub){

        super(name, id, email, role);
        this.gitHub =github;
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

const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, role, officeNumber){
        
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

const manager = new Manager;

manager.getName();
manager.getId();
manager.getEmail();
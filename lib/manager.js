// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
// officeNumber
//getRole() overridden to return `'Manager'`

const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, role, officeNumber){
        
        super(name, id, email, role);
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

module.exports = Manager;
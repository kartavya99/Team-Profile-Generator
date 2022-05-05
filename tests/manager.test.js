
const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

describe("Manager Class Tests", () => {
    it("has getRole() as entered role", () => {
        const returnValue = "Manager";
        const rambo = new Manager ("rambo", "9", "rambo@office.com", "777");
        expect(rambo.getRole()).toBe(returnValue);
    });

    it("has getOfficeNumber() as entered number", () => {
        const returnValue = 777;
        const rambo = new Manager ("rambo", "9", "rambo@office.com", returnValue);
        expect(rambo.getOfficeNumber()).toBe(returnValue);
    })

});



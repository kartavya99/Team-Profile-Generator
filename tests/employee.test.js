const Employee = require("../lib/employee");

// writing tests to check the functionality of the Employee class 

describe("Employee Class Tests", () => {
    it("has getName() as entered name", () => {
        const rambo = new Employee("rambo", "9", "rambo@office.com",);
        expect(rambo.getName()).toBe("rambo");
    });

    it("has getId() as entered id", () => {
        const rambo = new Employee("rambo", "9", "rambo@office.com",);
        expect(rambo.getId()).toBe('9');
    });

    it("has getEmail() as entered email", () => {
        const rambo = new Employee("rambo", "9", "rambo@office.com",);
        expect(rambo.getEmail()).toBe("rambo@office.com");
    });

    it("has getRole() as employee role", () => {
        const returnValue = "Employee";
        const rambo = new Employee("rambo", "9", "rambo@office.com",);
        expect(rambo.getRole()).toBe(returnValue);
    });
});
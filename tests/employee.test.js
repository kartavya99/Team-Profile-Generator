const Employee = require("../lib/employee");

describe("Employee Class Tests", () => {
    it("has getName() as entered name", () => {
        const rambo = new Employee("rambo", "9", "rambo@office.com", "fighter" );
        expect(rambo.getName()).toBe("rambo");
    });

    it("has getId() as entered id", () => {
        const rambo = new Employee("rambo", "9", "rambo@office.com", "fighter");
        expect(rambo.getId()).toBe('9');
    });

    it("has getEmail() as entered email", () => {
        const rambo = new Employee("rambo", "9", "rambo@office.com", "fighter");
        expect(rambo.getEmail()).toBe("rambo@office.com");
    });

    it("has getRole() as employee role", () => {
        const rambo = new Employee("rambo", "9", "rambo@office.com", "fighter");
        expect(rambo.getRole()).toBe("fighter");
    });
});
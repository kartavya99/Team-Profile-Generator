const employee = require("../lib/employee");

describe("employee Class Tests", () => {
    it("has getName() as entered name", () => {
        const rambo = new Employee("rambo");
        expect(rambo.getName()).toBe("rambo");
    });

    it("has getId() as entered id", () => {
        const rambo = new Employee(9);
        expect(rambo.getId()).toBe(9);
    });

    it("has getEmail() as entered email", () => {
        const rambo = new Employee("rambo@office.com");
        expect(rambo.getEmail()).toBe("rambo@office.com");
    });

    it("has getRole() as employee role", () => {
        const ramb0 = new Employee("fighter");
        expect(rambo.getRol()).toBe("fighter");
    });
});
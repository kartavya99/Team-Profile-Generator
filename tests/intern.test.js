
const Intern = require("../lib/intern");

// writing tests to check the functionality of the Intern class

describe("Intern Class Tests", () => {
    it("has getRole() as entered role", () => {
        const returnValue = "Intern";
        const rambo = new Intern("rambo", "9", "rambo@office.com", "school");
        expect(rambo.getRole()).toBe(returnValue);
    });

    it("has getSchool() as entered school name", () => {
        const returnValue = "school";
        const rambo = new Intern("rambo", "9", "rambo@office.com", returnValue);
        expect(rambo.getSchool()).toBe(returnValue);
    })
})
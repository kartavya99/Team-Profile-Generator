
const Intern = require("../lib/intern");

describe("Intern Class Tests", () => {
    it("has getRole() as entered role", () => {
        const rambo = new Intern("rambo", "9", "rambo@office.com", "fighter", "armySchool");
        expect(rambo.getRole()).toBe("fighter");
    });

    it("has getSchool() as entered school name", () => {
        const rambo = new Intern("rambo", "9", "rambo@office.com", "fighter", "armySchool");
        expect(rambo.getSchool()).toBe("armySchool");
    })
})
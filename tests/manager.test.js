
const Manager = require("../lib/manager");

describe("Manager Class Tests", () => {
    it("has getRole() as entered role", () => {
        const rambo = new Manager("rambo", "9", "rambo@office.com", "fighter", "777");
        expect(rambo.getRole()).toBe("fighter");
    });

    it("has getOfficeNumber() as entered number", () => {
        const rambo = new Manager ("rambo", "9", "rambo@office.com", "fighter", "777");
        expect(rambo.getOfficeNumber()).toBe("777");
    })

});



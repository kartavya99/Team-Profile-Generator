const Engineer = require("../lib/engineer");

describe("Engineer Class Tests", () => {
    it("has getRole() as entered role", () =>{
        const rambo = new Engineer("rambo", "9", "rambo@office.com", "fighter", "rambo123");
        expect(rambo.getRole()).toBe("fighter");
    });

    it("has getGithub() as github username", () => {
        const rambo = new Engineer("rambo", "9", "rambo@office.com", "fighter", "rambo123");
        expect(rambo.getGithub()).toBe("rambo123");
    });
});

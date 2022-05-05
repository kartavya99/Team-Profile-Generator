const Engineer = require("../lib/engineer");

// writing tests to check the functionality of the Enginer class 

describe("Engineer Class Tests", () => {
    it("has getRole() as entered role", () =>{
        const returnValue = "Engineer";
        const rambo = new Engineer("rambo", "9", "rambo@office.com", "rambo123");
        expect(rambo.getRole()).toBe(returnValue);
    });

    it("has getGithub() as github username", () => {
        const returnValue = "Github userName";
        const rambo = new Engineer("rambo", "9", "rambo@office.com", returnValue);
        expect(rambo.getGithub()).toBe(returnValue);
    });
});

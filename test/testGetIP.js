const expect = require("chai").expect;
const ipGetter = require("../getIP");

describe("Get IP", function () {
    it("should return IP address", function () {
        const ip = ipGetter.getServerIp();
        expect(ip).to.equal("172.20.10.4");
    });
});

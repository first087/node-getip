let expect = require("chai").expect;
let ipGetter = require("../getIP");

describe("Get IP", function() {
  it("should return IP address", function() {
    let ip = ipGetter.getServerIp();
    expect(ip).to.equal("172.20.10.4");
  });
});
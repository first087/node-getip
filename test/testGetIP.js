const expect = require('chai').expect
const ipGetter = require('../getIP')

describe("Get IP", function () {
    it("should return IP address", function () {
        const ip = ipGetter.getServerIp()
        const ips = ip.split('.').map(n => Number(n))

        ips.forEach(ipPart => {
            expect(ipPart).to.be.within(0, 255)
        }, this);
    });
});

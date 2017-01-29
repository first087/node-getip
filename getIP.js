exports.getServerIp = () => {
    const os = require('os')
    const ifaces = os.networkInterfaces()

    let values = Object.keys(ifaces).map(name => ifaces[name])
    values = [].concat.apply([], values).filter(val => val.family == 'IPv4' && val.internal === false)

    return values.length ? values[0].address : '0.0.0.0'
};

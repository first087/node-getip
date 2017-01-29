const express = require('express')
const ipGetter = require('./getIP')
const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    const ip = ipGetter.getServerIp()
    res.send('Hello, world! My IP = ' + ip)
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)

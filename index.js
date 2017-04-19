const express = require('express')
const ipGetter = require('./getIP')
const PORT = 3000

const app = express()

const devName = 'Your name' // Change to your name

app.get('/', (req, res) => {
    res.header('Content-Type', 'text/plain')
    res.send(`${devName}'s container IP = ${ipGetter.getServerIp()}`)
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)

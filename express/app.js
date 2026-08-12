const express = require('express')
const app = express()
let { pepole } = require('./data') // Typo in variable name 'pepole' if 'people' was intended

app.get('/api/pepole', (req, res) => {
    // Wrapped the object inside curly braces {}
    res.status(200).json({ success: true, data: pepole })
})

app.listen(5000, () => {
    console.log("server listening on 5000..")
})
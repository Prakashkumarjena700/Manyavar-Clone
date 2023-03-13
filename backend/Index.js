const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Welcome to our Manyavar Database")
})

app.listen(4500, () => {
    console.log('Server running at 4500')
})
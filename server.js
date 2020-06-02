// ExpressJS

// Import packages
const express = require('express')
const path = require("path");

const app = express()
const port = 3000

// Default route
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
// Write route
app.route('/write', (req, res) => res.send('Here you can write to the storage'))
// Read route
app.route('/read', (req, res) => res.send('Here yu can read the storage'))

// Server start with listening calls for incoming requests
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

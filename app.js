// Create an Express application
const express = require('express')
const app = express()
const port = 3000

// Default route
app.get('/', (req, res) => res.send('Welcome to Pi-NAS'))
// Write route
app.route('/write', (req, res) => res.send('Here you can write to the storage'))
// Read route
app.route('/read', (req, res) => res.send('Here yu can read the storage'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


  
// Include package and define related server varibles
const express = require('express')
const exhdb = require('express-handlebars')
const bodyParser = require('body-parser')
const dryTalker = require('./dryTalker')
const port = 3000
const app = express()

// Setting template engine
app.engine('handlebars', exhdb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Setting static files
app.use(express.static('public'))

// Setting body parse
app.use(bodyParser.urlencoded({ extends: true }))

// Setting routes
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const options = dryTalker(req.body.target)
    res.render('index',{options: options})
})

// Start the express web and listen for connection
app.listen(port, () => 
console.log(`Server is listening on http://localhost:${port}`)
)
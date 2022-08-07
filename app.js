const express = require('express')
const path = require('path')
const app = express()
const port = 5000

const searchEngine = require('./routes/searchEngine')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/assets', express.static('assets'))
app.use(express.urlencoded({ extended: false }))
app.use(searchEngine)

app.listen(port, () => console.log(`Server running in port : ${port}`))
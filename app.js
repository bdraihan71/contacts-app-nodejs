const express = require('express')
const morgan = require('morgan')

const contactRouters = require('./contactRoutes')

const app = express();
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/contacts', contactRouters)

app.get('*', (req, res) => {
    res.send('<h1>Please use the correct Route</h1>')
})

const port = process.env.PORT || 8080
app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})
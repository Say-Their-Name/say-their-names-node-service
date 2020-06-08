const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')
const port = process.env.PORT || 3000

//Implementing module of the route
const aasa = require('./routes/aasa')
const main = require('./routes/main') 

var app = express()
//Disable x-powerd-by header beacuase of security reasons 
app.disable('x-powerd-by')

app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs');

app.use(express.static('./public'))

app.get('/', async(req,res) => {

    res.set('Content-Type', 'application/json')
    res.status(200).render('docs')
})

/** Call to  database **/


mongoose.connect(config.get('database'))
.then(() => console.log('Connected to SayTheirName Node Service database \n --------------- \n'))
.catch(error => console.error('Could not connect to database' + error))


//Routes
app.use('/',aasa)
app.use('/', main)


app.listen(port, () => console.log(`SayTheirNames-Node Service listening on: ${port}`))


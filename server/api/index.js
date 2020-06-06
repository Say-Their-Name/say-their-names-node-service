const express = require('express')
const config = require('config')
const path = require('path')
const port = process.env.PORT || 3000

//Implementing module of the route
const aasa = require('./routes/aasa') 



var app = express()
//Disable x-powerd-by header beacuase of security reasons 
app.disable('x-powerd-by')

app.set('views',path.join(__dirname,'views'))
app.use(express.static('./public'))

app.get('/', async(req,res) => {

    res.status(200).send("Endpoint live at "+Date.now())
})

/** Call to  database **/
/*mongoose.connect("")
.then(() => console.log("Connected to SayTheirName Node Service database \n --------------- \n"))
.catch(error => console.error("Could not connect to database" + error))
*/

//Routes
app.use('/',aasa)


app.listen(port, () => console.log(`SayTheirNames-Node Service listening on: ${port}`))


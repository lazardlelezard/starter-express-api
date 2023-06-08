const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()

require('dotenv').config()
const uri = process.env.URI
const port = process.env.PORT

const errController = require('./controller/err')
const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')



app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(session({
    secret: "pateaubeurre",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}))

app.set('view engine', 'ejs')

app.use(express.static(path.dirname('public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

app.use(adminRoutes)
app.use(userRoutes)
app.use(errController.get404)

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(port, ()=>{console.log(`écoute sur le port ${port}`)})
}).catch((err)=>{
    console.log(err)
})
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection')


const app = express();

dotenv.config({path:'config.env'})
const port = process.env.port || 8080

//log requests
app.use(morgan('tiny'));

//mongoDB connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//if folder path change inside the views folder then use this line
// app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


//load routers
app.use('/',require('./server/routes/router'))


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})
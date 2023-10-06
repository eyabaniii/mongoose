const express=require("express")
const connect = require("./Config/connectDB")
//create instance
const app=express()
//middleware
app.use(express.json())
//require dotenv
require('dotenv').config()
// connect db
connect()
// create port
const PORT=process.env.PORT

// creat server

app.listen(PORT,(error)=>{

    error?console.log(error):console.log(`server in running on port ${PORT}`)
})

app.use('/api/person',require('./Routes/route'))

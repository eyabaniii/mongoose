const { default: mongoose } = require("mongoose")

const connect=async()=>
{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to database")
    }catch (error){
        console.log(error)
    }
}
module.exports= connect
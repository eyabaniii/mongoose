const  mongoose  = require("mongoose");

const schema=mongoose.Schema
 const PersonSchema= new schema({

    name:{type:String, required: true},

age: {type:Number},

favoritFoods: {type:[String], required: true}

})

module.exports =mongoose.model("person",PersonSchema) 
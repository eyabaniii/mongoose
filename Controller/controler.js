const person = require("../Models/personModel")

exports.addPerson=async(req,res)=>
{
    try {
        const {name ,age, favoritFoods}=req.body
        const newPerson = new person({name ,age, favoritFoods})
        await newPerson.save()
        res.status(200).send({msg:"person added successfuly",newPerson})
    } catch (error) {
        res.status(400).send({msg:"can not add person",error})
    }
}

exports.getAllPerson=async(req,res)=>
{
    try {
       const persons= await person.find()
        res.status(200).send({msg:"person found successfuly",persons})
    } catch (error) {
        res.status(400).send({msg:"error person",error})
    }
}

exports.findFoodsPerson=async(req,res)=>
{
    try {
        const Foods=req.body
        
      const persons = await person.findOne( {favoritFoods: {$in:Foods}})
        res.status(200).send({msg:`person who likes ${Foods}`,persons})
    } catch (error) {
        res.status(400).send({msg:"error person",error})
    }
}

   
exports.getById=async(req,res)=>{   // appel par id 
    try {
        const {_id}=req.params  //  lien de id

       const persons= await person.findById({_id})
       if(!persons)
       {
        res.status(400).send({msg:"error non valide "})  // erreur client 
       }
       else 
       {
        res.status(200).send({msg:"product found successfuly",persons})
       }
     } catch (error) {
        res.status(500).send({msg:"error on getting  person id",error})  // erreur server 
    }
    
    }
    exports.updateById=async(req,res)=>
    {
        try {
            const {_id}=req.params
            const newPerson=req.body
            const persons=await person.updateOne({_id},{$set:newPerson})
            res.status(200).send({msg:"person update",persons})

        } catch (error) {
            res.status(500).send({msg:"error",error})  // erreur server 

        }
    }
    exports.removeByID=async(req,res)=>
    {
        try {
            const {_id}=req.params
            await person.findByIdAndRemove({_id})
            res.status(200).send({msg:"person deleted succsufly"})

        } catch (error) {
            res.status(500).send({msg:"error delete",error})  // erreur server 

        }
    }
exports.ChainSearch=async(req,res)=>{
    try {
   
            const foodToSearch = ["pomme"];
        const persons=await( person.find({favoritFoods: {$in:foodToSearch}})
                  .sort({ name:1 }) // 1: nom de A-Z , -1 : nom Z-A
                  .limit(2)  // 2 person
                  .select({age:0 }) // sans age
                  .exec((err,data)=>{
                    if(err) console.log(err);
                    done(null, data);
                  }))
                
          res.status(200).send({msg:"person chain : ",persons})

    } catch (error) {
        res.status(500).send({msg:"error search",error})  // erreur server 

    }
}
    
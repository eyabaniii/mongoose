const express = require("express")
const { addPerson, getAllPerson, findFoodsPerson, getById, updateById, removeByID, ChainSearch } = require("../Controller/controler")
// require router
const router = express.Router()
 // add new person
 router.post('/addPerson',addPerson)
 // find person
 router.get('/getAllPerson',getAllPerson)

 // find foods
 router.get('/findFoodsPerson',findFoodsPerson)

// find by id
router.get('/getById/:_id',getById)
// update 
router.put('/updateById/:_id',updateById)
// remove by id 
router.delete('/removeByID/:_id',removeByID)

// search 
router.get('/ChainSearch',ChainSearch)
 module.exports=router
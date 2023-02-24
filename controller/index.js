const router = require ("express").Router()
const userroutes = require ("./")
const apiroutes = require ("./api")
router.use("/", homeroutes)


module.exports=router
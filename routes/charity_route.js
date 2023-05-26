const router=require("express").Router() 
const auth=require('../midillwares/auth')
const charitycontroller=require('../controllers/charitycontroller')

router.post('/postpub',auth.authentificate,charitycontroller.createposte)
router.delete('/deletepub/:id',auth.authentificate,charitycontroller.deletepub)
router.put('/modifypub/:id',auth.authentificate,charitycontroller.editepost)
module.exports=router
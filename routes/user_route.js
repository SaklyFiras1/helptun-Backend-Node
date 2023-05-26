const router=require('express').Router()
const authcontroller= require('../controllers/authcontroller')
const usercontroller= require('../controllers/usercontroller');
const charitycontroller= require('../controllers/charitycontroller');
const donneurcontroller= require('../controllers/donneurcontroller');
const { checkrole } = require('../midillwares/verifieradmin');
const auth=require('../midillwares/auth')


//s'inscrire en tant que charité
router.post('/charity',charitycontroller.signup)
//s'inscrire en tant que donneur
router.post('/givera',donneurcontroller.signup)
router.post('/login',authcontroller.signIn)
router.get('/giver',auth.authentificate,checkrole,usercontroller.getonlygivers)
router.get('/charity',auth.authentificate,checkrole,usercontroller.getonlycharity)
router.get('/',auth.authentificate,checkrole,usercontroller.getallusers)
router.put('/desabonnement/:id',charitycontroller.desabonnement)
router.put('/abonnement/:id',charitycontroller.abonnement)

router.put('/charity/:id',charitycontroller.updateprofil)

router.get('/getpub/:id',auth.authentificate,charitycontroller.getposts)


router.get('/:id',usercontroller.userinfo)

router.put('/bio/:id',usercontroller.updatebio)
router.delete('/:id',usercontroller.deleteuser)


module.exports=router
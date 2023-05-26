const jwt =require('jsonwebtoken')
require('dotenv').config()
module.exports.checkrole=function(req,res,next){
    console.log(res.locals.role)
if ((res.locals.role==='charity'|'giver')){

 res.sendStatus(403)

}
else{
    console.log(1)
    next()
}
}
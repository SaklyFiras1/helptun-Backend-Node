const jwt =require('jsonwebtoken')
require('dotenv').config()
module.exports.authentificate=function(req,res,next){

    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]
    console.log(token)
 if(token==null){

    res.sendStatus(401)
 }

 jwt.verify(token,process.env.Access_token,(err,response)=>{

    if(err){
        res.sendStatus(403).json('something wrong')
    }
res.locals=response
next()
 })
}
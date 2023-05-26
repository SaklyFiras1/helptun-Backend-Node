const donneur = require("../Models/usersmodels/donneur.model")
const usermodel = require("../Models/usersmodels/user.model")
const objectid=require('mongoose').Types.ObjectId

module.exports.signup=async(req,res)=>{
    const {username,Email,mot_de_passe}=req.body
    try{
    const giver=new donneur ({username,Email,mot_de_passe})
    await giver.save()
    res.status(200).json('successfully registred as giver')
    }
    
    catch(e){
        return res.status(500).json(e.message)
    }
    }
    
   
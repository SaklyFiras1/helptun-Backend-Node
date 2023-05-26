const usermodel=require('../Models/usersmodels/user.model.js')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')


module.exports.signIn=async(req,res)=>{


try{
    const{Email,mot_de_passe}=req.body

   console.log(Email)
   console.log(mot_de_passe)
    const user=await usermodel.findOne({Email})
    

 
if(user){

    const auth=await bcrypt.compare(mot_de_passe,user.mot_de_passe)
   if(auth){
 console.log(user._id.toString())
 let id=user._id.toString()
    const token=jwt.sign({id,expiresin:'8h',role:user.role},process.env.Access_token)
   console.log(token)
    return res.status(200).json({token:token})

   }
   else{
    throw Error('Incorrect mot de passe')
   }
    
}
else{
    throw Error('Incorrect Email')
}
}
catch(err){
    return res.status(500).json(err.message)
}

}



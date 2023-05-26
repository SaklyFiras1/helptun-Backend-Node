const objectid=require('mongoose').Types.ObjectId
const publicationmodel = require('../Models/publicationmodel')
const charityModel = require("../Models/usersmodels/charity.model")
const usermodel = require('../Models/usersmodels/user.model')
module.exports.signup = async (req, res) => {
    const { username, Email, phone, mot_de_passe } = req.body
    try {
        const charity = new charityModel({ username, Email, phone, mot_de_passe })
        await charity.save()
        res.status(201).json('successfully registred as charity')
    }

    catch (e) {
        return res.status(200).json(e)
    }
}
module.exports.updateprofil = async (req, res) => {
    if (!objectid.isValid(req.params.id)) {
        res.status(404).send({ message: 'utilisateur non trouvé' })

    }
    const {id}=req.params
    const {bio,ville,codepostale,linksocial,phone}=req.body
 try{
   const updateprofil=await charityModel.findOneAndUpdate(
    {_id:id }, 
    { bio ,ville,codepostale,linksocial,phone},
     { new: true})
      
         console.log(bio)
   return res.status(200).json(updateprofil)
           
    }
        
catch(err){
     return res.status(500).send(err.message) }
    }


module.exports.abonnement=async(req,res)=>{
   
    if (!objectid.isValid(req.params.id)||!objectid.isValid(req.body.idtofollow)) {
        res.status(400).send({ message: 'utilisateur non trouvé' })

    }
    try{
    await usermodel.findByIdAndUpdate({_id:req.params.id},{$addToSet:{abonnement:req.body.idtofollow}},
        {new:true})
    await charityModel.findByIdAndUpdate({_id:req.body.idtofollow},{$addToSet:{abonnés:req.params.id}},{new:true})
    return res.status(201).json('abonné')

   }
   catch(err){
    return res.status(500).json(err.message)
}
}
module.exports.desabonnement=async(req,res)=>{
   
    if (!objectid.isValid(req.params.id)||!objectid.isValid(req.body.idtounfollow)) {
        res.status(400).send({ message: 'utilisateur non trouvé' })

    }
    try{
    await usermodel.findByIdAndUpdate({_id:req.params.id},{$pull:{abonnement:req.body.idtounfollow}},
        {new:true})
    await charityModel.findByIdAndUpdate({_id:req.body.idtounfollow},{$pull:{abonnés:req.params.id}},{new:true})
    return res.status(201).json('desabonné')

   }
   catch(err){
    return res.status(500).json(err.message)
}
}
module.exports.createposte=async(req,res)=>{
    const posterid=res.locals.id
    const {video,image,statut }=req.body
try{
    const publication=new publicationmodel({posterid:res.locals.id , video, image, statut}) 

     console.log(posterid)
     console.log(req.body.statut)
    await publication.save()
    res.status(201).json('publication successfully created')
}
catch(err){
    res.status(500).json('something wrong')

}

}
module.exports.editepost=async(req,res)=>{
    const {statut,video,image }=req.body

try{
    console.log(res.locals.id)
   const poster= await publicationmodel.findById({_id:req.params.id})
   console.log(poster.posterid.toString())
   if(poster.posterid==res.locals.id){
    console.log(1)
    await publicationmodel.findByIdAndUpdate({_id:req.params.id},{statut,video,image},{new:true})
    return res.status(200).json('publication updated successfully')
   }
    else{
        return res.status(401).json('u cannot modify this post')
    }
   }
        catch(err){
            res.status(500).json(err.message) 
        }
    

}
module.exports.getposts=async(req,res)=>{
    if (!objectid.isValid(req.params.id)) {
        res.status(404).send({ message: 'publication non trouvé' })

    }
    try{
 const posts=await publicationmodel.find({posterid:req.params.id})
      
 return res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err.message) 
    }

}
module.exports.deletepub=async(req,res)=>{
   
    try{
await publicationmodel.findByIdAndRemove({_id:req.params.id},{posterid:res.locals.id})
      
 return res.status(200).json('publication removed successfully')
    }
    catch(err){
        res.status(500).json(err.message) 
    }

}

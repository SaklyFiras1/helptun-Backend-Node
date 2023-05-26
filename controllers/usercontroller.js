
const charityModel = require('../Models/usersmodels/charity.model')
const usermodel = require('../Models/usersmodels/user.model')
const objectid = require('mongoose').Types.ObjectId
module.exports.getonlygivers=async(req,res,err)=>{
    const scarlet =await usermodel.find({role:'giver'}).select()
    return res.status(200).json(scarlet)
}
module.exports.getonlycharity=async(req,res,err)=>{
    const scarlet =await usermodel.find({role:'charity'}).select()
    return res.status(200).json(scarlet)
}
module.exports.getallusers = async (req, res) => {

    const users = await usermodel.find().select('-mot_de_passe')

    return res.status(200).json(users)

}
module.exports.userinfo = async (req, res, err) => {
    if (!objectid.isValid(req.params.id))
        return res.status(400).json('utilisateur avec ' + req.params.id + 'non trouvé')
    try {
        const userpf = await usermodel.findById(req.params.id).select('-mot_de_passe')


        return res.status(200).send(userpf)
    }

    catch (err) {

        res.status(400).json('utilisateur avec ' + req.params.id + 'non trouvé ')
    }
}


module.exports.deleteuser = async (req, res, err) => {
    if (!objectid.isValid(req.params.id)) {
        res.status(404).send({ message: 'utilisateur non trouvé' })


    }
    else
        await usermodel.findByIdAndRemove(req.params.id)
    res.status(200).json({ message: 'utilisateur avec id :' + req.params.id + ' est supprimé ' })
}


module.exports.updatebio = async (req, res) => {
    if (!objectid.isValid(req.params.id)) {
        res.status(404).send({ message: 'utilisateur non trouvé' })

    }
 try{
    await usermodel.findOneAndUpdate(
        { _id: req.params.id }, 
        { $set: req.body.bio },
         { new: true, upsert: true, setDefaultsOnInsert: true },(docs))
         
   return res.status(200).json(docs)
           
    }
        
catch(err){ return res.status(500).json(err) }
    }


  
    






    
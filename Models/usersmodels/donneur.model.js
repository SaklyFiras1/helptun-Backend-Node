const mongoose=require('mongoose')
const usermodel=require('./user.model')
const giverschema=new mongoose.Schema({
    
})
module.exports = usermodel.discriminator('giver',giverschema);

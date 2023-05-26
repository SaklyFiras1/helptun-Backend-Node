const mongoose=require('mongoose')
const usermodel=require('./user.model')
const charityschema=new mongoose.Schema({
 
    bio:{
    type:String,
    maxlength:500
    
},
abonnés:{
    type:[String]
    

},
codepostale:{
    type:String,
 
    maxlength:5
},
phone:{
    type:String,
   
    


},
ville:{
    type:String,
    maxlength:10

},
status:{
 type:Boolean,
 default:false

},
linksocial:{
    type:String,
    maxlength:50
}
},

{ timestamps: true })


module.exports = usermodel.discriminator('charity',charityschema);

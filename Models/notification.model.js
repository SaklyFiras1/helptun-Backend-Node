const mongoose=require('mongoose')


notificationschema=new mongoose.Schema({
    iduser:{
        required:true,
        type:String
       
    },

message:{
    required:true,
        type:String

}



})
const notificationmodel=mongoose.model('notification',notificationschema)
module.exports=notificationmodel
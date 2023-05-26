const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

userschema=new mongoose.Schema({

   
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:3,
        maxLength:23
        },
  
    Email:{
        
        type:String,
        trim:true,
        lowercase:true

    
    },
  
    
    mot_de_passe:{
              type:String,
              minlength:8,
              maxlength:11,
              trim:true
    
    
    },
    
    picture:{
        type:String,
        default:"./uploads/profil/randomuser.png"
    } ,
    jaime:{
        type:[String]
    },
    abonnement:{
        type:[String]
    } , 
   
    },
    {
    timestamps:true,
    discriminatorKey: 'role'
    }
    
)
userschema.pre("save",async function(next){
const expression=await bcrypt.genSalt()
this.mot_de_passe=await bcrypt.hash(this.mot_de_passe,expression)
next()
})

const usermodel=mongoose.model('user',userschema)
module.exports=usermodel
const mongoose=require('mongoose')

 mongoose.connect('mongodb://localhost:27017/helptun').then(()=>console.log("db connected on port 27017")) 

.catch((err)=>console.log("failed to connect to db",err)) 

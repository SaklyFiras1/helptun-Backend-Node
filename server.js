const express=require('express') ;
const cors =require('cors')
const bodyparser=require('body-parser')
const user_route=require('./routes/user_route')
const charity_route=require('./routes/charity_route')
require('dotenv').config({path:'config/.env'})
require('./config/DB')
const app=express() ;
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({Extended:true}))
app.use(cors({  

}))
app.use('/api/user',user_route)
app.use('/api/charity',charity_route)

app.listen(process.env.Port,()=>{
    console.log(`server is running on port ${process.env.Port}`)
})

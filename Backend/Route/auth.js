var express = require('express')
const User=require('../modules/user')
// const { body, validationResult, ExpressValidator } = require('express-validator');
// const bcrypt=require('bcryptjs')
const router=express.Router();
const cors=require('cors')
const app1=express()
app1.use(cors())
app1.use(express.json())
router.post('/',[
    
   body('email','Enter Valid email').isEmail(),


],async (req,res)=>{
    
    
   
    console.log(req.body)
    // const errors=validationResult(req.body)
    let users=User(req.body)
    let user=User(obj)
    // if(!errors.isEmpty){
    //     return res.status(400).json({errors:errors.array()})
    
    // user=await User.create({
    //     name:req.body.name,
    //     email:req.body.email,
    //     password:req.body.password,
    // })
    res.send('hii')
    await users.save()
   
   
//    await user.save()
    
})
module.exports=router;
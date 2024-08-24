const connectMongo=require('./db');
const User=require('./modules/user')
connectMongo();
const bodyParser = require('body-parser');
const cors=require('cors')
 
const express = require('express')
const app = express()
app.use(bodyParser.json())
app.use(cors())
// app.get('/', (req, res)=> {
//   res.send('Hello World')
// })

// app.use('/api/auth',require('./Routes/auth'))
app.post('/api/auth', async (req, res) => {
//    console.log(typeof(req.body))
     const obj={
        "name":"silu",
        "email":"pilu@gmail.com",
        "password":"bnzdddxs",
     }
    const jsonString = JSON.stringify(req.body);
    console.log(req.body)
    console.log('hii')
    let user=User(req.body)
    
    await user.save()
    // const data=req.body
    res.status(200).json(req.body);
  });

app.get('/api/auth',(req,res)=>{
    
    // console.log(req.body)
    obj={
      "name":"Lora",
      "email":"s@gmail.com"
    }
    res.send("Successfully worked!!")
    
})
app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(3000,()=>{
  console.log("successfully joined!!")
})
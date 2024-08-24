const mongoose=require('mongoose');
const mongoURI='mongodb://localhost:27017/local'

async function connectMongo(){
    try{

        await mongoose.connect(mongoURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          console.log('Mongo connected!')
    }catch(error){
        console.error(error)
    }
}
module.exports=connectMongo;
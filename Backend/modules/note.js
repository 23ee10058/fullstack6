const mongoose=require('mongoose');
const {Schema}=mongoose;
const note=new Schema({
    title:{
        type:String,
        required:true,

    },
    desc:{
        type : String,
        required:true,
  
    },
})
module.exports=mongoose.model('notes',note);
const mongoose=require('mongoose');

const yogaSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:
    {
        type:String,
        unique:true,
        required:true,
    },

    phone :
    {
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    }
});
const yogaCollection= new mongoose.model('yogacollection',yogaSchema);

module.exports=yogaCollection;
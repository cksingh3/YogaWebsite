const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/yogaRegister')
// mongodb://localhost:27017
.then(()=>
{
    console.log(`connect`)
})

.catch((error)=>
{
    console.log(`error`)
})
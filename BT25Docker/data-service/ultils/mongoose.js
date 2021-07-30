const mongoose = require('mongoose');

 getConnect = async ()=>{
    try{
      await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
      console.log("Connect Success!");
    }
    catch(err){
      console.log(err);
    }
    
  }
module.exports=({getConnect});

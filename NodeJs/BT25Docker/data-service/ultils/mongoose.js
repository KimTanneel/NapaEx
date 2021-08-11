const mongoose = require('mongoose');

 getConnect = async ()=>{
    try{
      await mongoose.connect('mongodb://mongo:27017/test', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
      useCreateIndex: true})
      console.log("Connect Success!");
    }
    catch(err){
      console.log(err);
    }
    
  }
module.exports=({getConnect});

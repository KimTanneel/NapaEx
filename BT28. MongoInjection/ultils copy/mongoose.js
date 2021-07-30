const mongoose = require('mongoose');

 getConnect = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/Tan', {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("Connect Success!");
    
  }
module.exports=({getConnect});

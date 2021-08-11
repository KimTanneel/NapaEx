const express = require('express')
const app = express()
const port = 3000;
// mongoose config
const db = require('./ultils/mongoose');
const Student = require('./model/student');
app.use(express.json());
console.log("Connect DB....")
db.getConnect();

app.get('/', async (req,res)=>{
    try{
        const students = await Student.find();
        // console.log(students);
        // res.send(students);
        res.send("Hello word")
    }
    catch(err){
        console.log(err);
        res.send(err)
    }
    
})

app.listen(port,()=>{
    console.log(`App listen on port ${port}`)
})
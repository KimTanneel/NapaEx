const express = require('express')
const app = express()
const port = 8080;
// mongoose config
const db = require('./ultils/mongoose');
const Student = require('./model/student');
app.use(express.json());
db.getConnect();

app.get('/', async (req,res)=>{
    const students = await Student.find({});
    console.log(students);
    res.send(students);
})

app.listen(port,()=>{
    console.log(`App listen on port ${port}`)
})
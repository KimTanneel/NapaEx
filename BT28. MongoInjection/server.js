const express = require('express');
const app = express();
const db = require('./ultils/mongoose');
const Student = require('./model/student');
app.use(express.json());
db.getConnect();


/*

=================DEMO NON SQL INJECTION==============

POST http://localhost:3000/student
Content-Type: application/json

{
    "name":{
    "$ne": "mymaliciouspassword"
  }
}

*/ 

app.post('/student', async (req, res) => {
    try {
        console.log(req.body);
        let name = req.body.name;
        const students = await Student.find({name:name})
        console.log(students)
        res.send('Create Success');
    } catch (err) {
        res.send("Create Fail");
    }

})


app.listen(3000, () => {
    console.log("server listen on port 3000");
})  
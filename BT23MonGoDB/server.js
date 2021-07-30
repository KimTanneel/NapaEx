const express = require('express');
const app = express();
const db = require('./ultils/mongoose');
const Student = require('./model/student');
app.use(express.json());
db.getConnect();
// create
app.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        let name = req.body.name;
        let phone = req.body.phone;
        let email = req.body.email;
        let type = req.body.type;
        const newStudent = new Student({
            name: name,
            phone: phone,
            email: email,
            type: type,
            isDelete:false
        })
        await newStudent.save((err) => {
            console.log(err);
        })

        res.send('Create Success');
    } catch (err) {
        res.send("Create Fail");
    }

})
// update
app.post('/edit', async (req, res) => {
    try{
        console.log(typeof(req.body.id));

        let id = req.body.id;
        let name = req.body.name;
        let phone = req.body.phone;
        let email = req.body.email;
        let type = req.body.type;
        console.log(req.body);
        Student.findById(id, async function (err, doc) {
            if (err) {
                console.log(err);
                res.send('Update fail');
            }
            doc.name = name;
            doc.phone = phone;
            doc.email = email;
            doc.type = type;
            await doc.save();
            res.send('Update Success');
        });
    }
    catch(err){
        res.send('Update fail');
    }

})
// delete
app.post('/delete', async (req, res) => {
    try{
        let id = req.body.id;
        Student.findById(id, async function (err, doc) {
            if (err) {
                console.log("VAO ERROR");
                res.send('Delete Fail')
            } else {
                doc.isDelete = true;
                await doc.save();
                res.send('Delete Success');

            }
        })
    }
    catch(err){
        console.log("Catct err");
        res.send('Delete Fail');
    }

})


// find By Id
app.get('/findById', async (req, res) => {
    try {
        const id = req.query.id;
        const student = await Student.findById(id);
        if (student.isDelete ===true){
            student = {};
        }
        res.send(student);
    } catch (err) {
        console.log(err)
    }
    
})
// find All
app.get('/findAll', async (req, res) => {
    // find By type
    try{
        console.log(req.query);
        let type = req.query.type;
        let page = req.query.page;
        let size = req.query.size;
        const matchedStudent = await Student.find({
            type: type,
            isDelete:false
        });
        let StudentRender;
    
        let totalpageFinded = (matchedStudent.length / size === 0 ? matchedStudent.length / size : Math.floor(matchedStudent / size));
        // Check page 
        if (totalpageFinded < page) {
            StudentRender = [];
        } else {
            StudentRender = matchedStudent.slice(size * (page - 1), size * page);
        }
        res.send(StudentRender);
    }
    catch(err){
        res.send("Find All Error");
    }
    
})

app.listen(3000, () => {
    console.log("server listen on port 3000");
})
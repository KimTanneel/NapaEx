const express = require('express');
const app = express();
const client = require('./utils/postgres');
const text = 'SELECT * FROM student WHERE student.id = $1'
// const values = ['brianc', 'brian.m.carlson@gmail.com']
app.use(express.json());
client.connect();
let id="1";
const values = ['1'];

app.post('/create', async (req, res) => {
    const query = 'INSERT INTO student(id,name,phone,email,type) VALUES($1, $2, $3, $4, $5)'
    const params = [];
    try {  
        let id = req.body.id;
        let name = req.body.name;
        let phone = req.body.phone;
        let email = req.body.email;
        let type = req.body.type;
        params.push(id,name,phone,email,type);

        const result = await client.query(query,params)
        console.log(result);
        res.send('Create Success');
    } catch (err) {
        res.send(err);
    }

})
// update
app.post('/edit', async (req, res) => {
    const query = "UPDATE student SET name=$1,phone=$2,email=$3,type=$4 WHERE student.id = '1'";
    const params = []
    try{
        
        let name = req.body.name;
        let phone = req.body.phone;
        let email = req.body.email;
        let type = req.body.type;
        params.push(name,phone,email,type)

        const result = await client.query(query,params)
        console.log(result);
        res.send('Create Success');
    }
    catch(err){
        res.send(err);
    }

})
// delete
app.post('/delete', async (req, res) => {
    const query = "DELETE FROM student WHERE student.id=$1";
    const params = []
    try{
        
        let id = req.body.id;
        params.push(id);
        const result = await client.query(query,params)
        console.log(result);
        res.send('Create Success');
    }
    catch(err){
        res.send(err);
    }

})


// find By Id
app.get('/findById', async (req, res) => {
    const query = "SELECT * FROM student WHERE student.id = $1";
    const params = []
    try{
        
        let id = req.body.id;
        params.push(id);
        const result = await client.query(query,params)
        console.log(result);
        res.send(result.rows[0]);
    }
    catch(err){
        res.send(err);
    }
    
})
// find All
app.get('/findAll', async (req, res) => {
    // find By type
                    "select * from student where student.type= 'Hocsinh'LIMIT 2 OFFSET 0"
    const query = "SELECT * FROM student WHERE student.type = $1 LIMIT $2 OFFSET $3";
    const params = []
    try{
        const type = req.query.type;
        const page = req.query.page;
        const size = req.query.size;
        params.push(type,size,(page-1)*size);
        console.log(params);
        const result = await client.query(query,params)
        res.send(result.rows);
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
})

app.listen(3000,()=>{
    console.log("app listen in port 3000");
})


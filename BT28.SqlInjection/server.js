const express = require('express');
const app = express();
const client = require('./utils/postgres');
app.use(express.json());
client.connect();

/* 
============SQL INJECTION DEMO============
POST http://localhost:3000/account
Content-Type: application/json

{
    "username":"'or 1=1--"
}

*/
app.post('/account', async (req, res) => {
    console.log("request up")
    let username = req.body.username;
    try { 
    const query = "SELECT * FROM account where username = '"+username+"'"
        console.log(query)
        const result = await client.query(query)
        console.log(result.rows);
        res.send('Create Success');
    } catch (err) {
        console.log(err)
        res.send(err);
    }
})

/*
============Handle SQL INJECTION=============

app.post('/account', async (req, res) => {
    console.log("request up")
    let username = req.body.username;
    try { 
    const query = "SELECT * FROM account where username =$1"
    const param =[]
    param.push(username)
        const result = await client.query(query,param)
        console.log(result.rows);
        res.send('Create Success');
    } catch (err) {
        console.log(err)
        res.send(err);
    }
// })
*/
const accounts = [
    {username:"tan",password:"123124"},
    {username:"admin",password:"123123"}
]
console.log({accounts})
app.listen(3000,()=>{
    console.log("app listen in port 3000");
})


const express = require('express');
const app = express();
const client = require('./utils/postgres');
app.use(express.json());
client.connect();
// SQL INJECTION DEMO
app.post('/account', async (req, res) => {
    console.log("request up")
    let username = req.body.username;
    try { 
    const query = "SELECT * FROM account where username = '"+username+"'"
        const result = await client.query(query)
        console.log(result.rows);
        res.send('Create Success');
    } catch (err) {
        console.log(err)
        res.send(err);
    }
})


app.listen(3000,()=>{
    console.log("app listen in port 3000");
})


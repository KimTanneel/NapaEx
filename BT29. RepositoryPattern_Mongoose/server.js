const express = require('express');
const app = express();
const db = require('./ultils/mongoose');
const StuRoute = require('./routes/studentRoute')
app.use(express.json());
db.getConnect();
app.use('/student',StuRoute)

app.listen(3000, () => {
    console.log("server listen on port 3000");
})  
const express = require('express');
const app = express();
const StuRoute = require('./routes/studentRoute')
app.use(express.json());
app.use('/student',StuRoute)

app.listen(3000, () => {
    console.log("server listen on port 3000");
})  
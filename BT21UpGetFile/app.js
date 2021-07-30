const { json } = require('express')
const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })
const path = require('path')
const app = express()

app.use(express.static('public'))
// app.use(json);

// Store fileNames
let fileNames = [];

// single File
app.post('/upload', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  let fileName = (req.file.destination+req.file.filename).split('/').slice(1).join('/');
  fileNames.push(fileName);
  res.redirect('/getFile');
})


//Mutilple files
app.post('/uploadFiles', upload.array('avatar', 12), function (req, res) {
  // req.files is array of `photos` files
  console.log(req.files);
  req.files.forEach((file)=>{
      let fileName =(file.destination+file.filename).split('/').slice(1).join('/');
      fileNames.push(fileName);
  })
})

// Get File By Static File Name
app.get('/getFile',(req,res)=>{
    res.json(fileNames);
})


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/views/file.html'))
})
 

app.listen(3000,()=>{
    console.log("app listen in port 3000")
})

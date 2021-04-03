// app.js
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
app.use(cors());
// const upload = multer({
//     dest:'upload/'
// })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        console.log(file.originalname)
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})

var upload = multer({ storage: storage })


app.post('/upload',upload.single('file'),(req,res)=>{
    res.send(req.file);
})

app.listen('3000',()=>{
    console.log('sds')
})
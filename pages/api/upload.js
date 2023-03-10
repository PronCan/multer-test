// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const express = require("express");
const app = express();
const path = require('path')
const multer = require("multer")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/")
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, path.extname(file.originalname) + Date.now())
  }
})

const cors = require('cors')
app.use(cors());

const morgan = require('morgan')
app.use(morgan('dev'))
app.use(express.json())

app.use('/public', express.static('public'))

const upload = multer({storage: storage})

app.set('view engine', 'js');

app.get('/api/upload', (req, res) => {
  res.render('upload')
})
app.post('/api/upload', upload.single('file'), (req, res)=> {
  console.log(req.files);
  console.log(req.file);
  res.send('img upload') 
  return res.json({test:"ok"})
})

app.listen(3000, ()=> console.log('port 3000'));
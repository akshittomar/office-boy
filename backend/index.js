const connection = require('./db');
const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require("multer");  


connection();

const app = express()
const port = 5000



const server = require('http').createServer(app);
const io = require('socket.io')(server); //socket.io is a http method
io.on('connectiom',socket=>{
  socket.on('useer-joined',name=>{

  })
})

app.use(cors())
app.use(express.json())

app.get('/home', (req, res) => {//300 port k papa page pe hello world bhejo 
     
  res.send('Hello World!')
})

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/scheduler',require('./routes/scheduler'))
app.use('/api/mail',require('./routes/mail'))
app.use('/api/sendwork',require('./routes/workDistributer'))
app.use('/api/mywork',require('./routes/GivenWork'))

app.listen(port, () => {
  console.log(`NOTES APPLICATION  BACKEND LISTENING ON PORT  ${port}`)
})

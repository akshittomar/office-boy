const connection = require('./db');
const express = require('express')
var cors = require('cors')
const fetchuser = require('./routes/middleware/fetchuser')


const socketIO = require('socket.io');
const { header } = require('express-validator');


connection();

const app = express()
const port = 5000



const server = require('http').createServer(app);
// const io = socketIO(server); //socket.io is a http method
// io.on('connection',(message)=>{
//   console.log(message);
// }
// )
const io = require('socket.io')(server);





app.use(cors())
app.use(express.json())




app.get('/home', (req, res) => {//300 port k papa page pe hello world bhejo 
     
// const message="GET WORK HAS BEEN DONE ";
// io.emit('getRequest',{message})
  res.send('Hello World!')
})

const mid=()=>{
  app.get('/', (req, res) => {
    io.emit('connect',{message:"hello socket "})
    res.send('Hello from the server!')
  });
}

app.use('/',require('./routes/home'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/scheduler',require('./routes/scheduler'))
app.use('/api/mail',require('./routes/mail'))
app.use('/api/sendwork',require('./routes/workDistributer'))
app.use('/api/mywork',require('./routes/GivenWork'))

app.listen(port, () => {
  console.log(`NOTES APPLICATION  BACKEND LISTENING ON PORT  ${port}`)
})

module.exports= io ;
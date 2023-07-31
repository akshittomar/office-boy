const connection = require('./db');
const express = require('express')
require('dotenv').config();
var cors = require('cors')
const fetchuser = require('./routes/middleware/fetchuser')


const socketIO = require('socket.io');



connection();

const app = express()
const port = 5000



// const server = require('http').createServer(app);
// // const io = socketIO(server); //socket.io is a http method
// // io.on('connection',(message)=>{
// //   console.log(message);
// // }
// // )
// const io = require('socket.io')(server);


const FRONTEND_SOCKET = process.env.FRONTEND_SOCKET;


app.use(cors())
app.use(express.json())




app.get('/home', (req, res) => {//300 port k papa page pe hello world bhejo 
     
// const message="GET WORK HAS BEEN DONE ";
// io.emit('getRequest',{message})
  res.send('Hello World!')
})

// const mid=()=>{
//   app.get('/', (req, res) => {
//     io.emit('connect',{message:"hello socket "})
//     res.send('Hello from the server!')
//   });
// }

app.use('/',require('./routes/home'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/scheduler',require('./routes/scheduler'))
app.use('/api/mail',require('./routes/mail'))
app.use('/api/sendwork',require('./routes/workDistributer'))
app.use('/api/mywork',require('./routes/GivenWork'))

const server = app.listen(port, () => {
  console.log(`NOTES APPLICATION  BACKEND LISTENING ON PORT  ${port}`)
})

const io = require('socket.io')(server,{
pingTimeout:60000,autoConnect: false, reconnection: false,
cors:{
  origin:`${FRONTEND_SOCKET}`,
}

});


 io.on("connection",(socket)=>{
  // console.log("connected to socket.io");

  socket.on("setup",(userData)=>{
    socket.join(userData.email);
    console.log(userData.email);
    socket.emit("connected");
  });

  socket.on("joinChat",(room)=>{
    socket.join(room);
    console.log("User Joined Room:"+room);
  });


  socket.on("newMessage",(content)=>{
    var chat = content.chat;
    
    socket.in(content.id).emit("messageReceived",content);
    console.log("content id is ");
        console.log(content.id);
    })
  

    socket.on("newMessage2",(content)=>{
      var chat = content.chat;
      
      socket.in(content.id).emit("messageReceived2",content);
  
      })
      socket.off("setup",(userData)=>{
        console.log("USER DISCONNECTED");
        socket.leave(userData.email)
      })


      socket.on("leaveChat",(room)=>{
        console.log(`USER DISCONNECTED ${room}`);
        socket.removeAllListeners();
        socket.leave(room);
      })

      // socket.on("joinChat2",(room)=>{
      //   console.log("USER DISCONNECTED");
      //   socket.leave(room)
      // })

});

module.exports= io ;  
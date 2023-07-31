// const express = require('express');
// const router = express.Router();
// const io = require('socket.io')();
// const iio = require('socket.io-client');

// const po = iio("http://localhost:5000");
// const nsp = io.of("http://localhost:5000");



// router.get ('/',async (req,res)=> {
//     try{
        
//         nsp.emit('connec',{message:"hogya socket"})

// console.log("alive");
// po.on('connec', (message) => {
//   console.log("socket"+message);
// })

// res.send({message:"its / baby"});
// }
// catch(error)
// {
//     console.error(error.message);
//     res.status(500).send("INTERNAL SERVER  ERROR ");
// }
// })
// module.exports = router;



/*
const express = require('express');
const router = express.Router();
const io = require('socket.io')();
const iio = require('socket.io-client');

const po = iio("http://localhost:5000");
po.connect();
const nsp = io.of("http://localhost:5000");

router.get ('/',async (req,res)=> {
    try {
        nsp.emit('connec', {message:"hogya socket"})
        
        
        po.on('connec', (message) => {
          console.log("socket"+message);
        })
        
        res.send({message:"its get request"});
    } catch(error) {
        console.error(error.message);
        res.status(500).send("INTERNAL SERVER ERROR");
    }
})

module.exports = router;
*/





/*

const express = require('express');
const router = express.Router();
const io = require('socket.io')();
const iio = require('socket.io-client');

// Connect to the Socket.IO server's default namespace
const po = iio("http://localhost:5000");

// Connect to a specific namespace on the Socket.IO server
// const po = iio("http://localhost:5000/my-namespace");

// Connect to the Socket.IO server
po.connect();

// Create a new namespace on the server
const nsp = io.of("/my-namespace");

// Listen for a connection event on the namespace
nsp.on('connection', (socket) => {
  console.log("A new client has connected to the namespace");

  // Emit a custom event to the client
  socket.emit('custom-event', { message: "Hello from the server!" });
});

router.get('/', async (req, res) => {
  try {
    // Emit a custom event to the server's namespace
    nsp.emit('custom-event', { message: "Hello from the client!" });

    console.log("Client sent custom event to the server's namespace");

    // Listen for the custom event on the client
    po.on('custom-event', (message) => {
      console.log("Received custom event from the server:", message);
    });

    res.send({ message: "API is running" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("INTERNAL SERVER ERROR");
  }
});

module.exports = router;*/



const express = require('express');
const router = express.Router();


router.get ('/',async (req,res)=> {
    try {
        
        res.send({message:"its get request"});
    } catch(error) {
        console.error(error.message);
        res.status(500).send("INTERNAL SERVER ERROR");
    }
})

module.exports = router;


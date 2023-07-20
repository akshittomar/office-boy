const express = require('express');
const router = express.Router();
var fetchuser = require('./middleware/fetchuser');
const User = require('../models/User')
const Work = require('../models/WorkDistributer');

const { body, validationResult } = require('express-validator');
const Accomplish = require('../models/Accomplishments');

// const { route } = require('./auth');
// ALL IMPORTS ARE DONE













router.get ('/fetchallwork',fetchuser,async (req,res)=> {
   

try{

const notes = await Work.find({user: req.user.id});


const message="GET WORK HAS BEEN DONE ";
require('../index').emit('getRequest',{message})


res.json(notes);
}
catch(error)
{
    console.error(error.message);
    res.status(500).send("INTERNAL SERVER  ERROR ");
}
})




router.put('/fetchallepm',fetchuser,async (req,res)=> {
   try{
    const {epostFind}=req.body;
    console.log("requested post is this "+epostFind);
    const notes = await User.find({epost:epostFind});
    // console.log(notes);
    res.json(notes);
    }
    catch(error)
    {
        console.error(error.message);
        res.status(500).send("INTERNAL SERVER  ERROR ");
    }
    })





// router.put('/fetchalltask',fetchuser,async (req,res)=> {
//    try{
//         const {taskFind}=req.body;
//         console.log("requested user email is this "+taskFind);
//         const task = await Work.find({empemail:taskFind});
//         const user = await Work.find({ user: req.user.id }).populate('user', 'name epost');
//         console.log("********************************************************");
//         console.log(user);

//         console.log("********************************************************");
//         // console.log(user);
//         // res.json(task);
//         res.json(task.map(work => ({
//           _id: work._id,
//           title: work.title,
//           description: work.description,
//           // epost: work.epost,
//           erank: work.erank,
//           leaves: work.leaves,
//           tag: work.tag,
//           chat: work.chat,
//           empname: work.empname,
//           edoj: work.edoj,
//           name: user.name,
//           epost: user.epost,
          
//         })));
//         }
//         catch(error)
//         {
//             console.error(error.message);
//             res.status(500).send("INTERNAL SERVER  ERROR ");
//         }
//         })



router.put('/fetchalltask', fetchuser, async (req, res) => {
  try {
    const { taskFind } = req.body;
    console.log("requested user email is this " + taskFind);

    const task = await Work.find({ empemail: taskFind }).populate('user', 'name epost');

    // console.log(task);

    res.json(task.map(work => ({
      _id: work._id,
      title: work.title,
      description: work.description,
      erank: work.erank,
      leaves: work.leaves,
      tag: work.tag,
      chat: work.chat,
      empname: work.empname,
      edoj: work.edoj,
      post:work.epost,
        name: work.user.name,
        epost: work.user.epost
      
    })));
  } catch (error) {
    console.error(error.message);
    res.status(500).send("INTERNAL SERVER ERROR");
  }
});













router.post('/addwork',fetchuser,[
body('title','ENTER A VALID TITLE NAME ').isLength({min:5}),
body('description','ENTER A VALID DESCRIPTION OF MIN LENGTH OF 5 ').isLength({min:5}),
],async (req,res)=> {
    
  var error  = "SORRY A PROJECT THIS NAME ALREADY EXISTS ";
  var success = false;
try{
    const {title,description,epost,erank,tag,empemail,empname,empdoj} = req.body ;
    
    let user =await  Work.find({title: req.body.title});
    if(user.length!==0)
    {
      console.log("mar gya mai to" );
      // console.log(user);
      // var success = false;
      return res.status(400).json({error,success})

    }

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() ,success});
    }
const work = new Work({
    title,description,epost,erank,tag,empemail,empname,empdoj,user: req.user.id
})

const savedWork = await work.save();
// lo bhai thunderClient se ab MongoDB database tak ka safar idhar establish hua  note.save() krke 
console.log("i am reaching");
// console.log("THIS NOTE GOT SAVED "+savedWork)
res.send(savedWork)
}
catch(error){
    console.error(error.message);
    res.status(500).json({error:error.message,success});
}
}) 


//find all task ----> in work ----> i've got all employees who were provided work 
// work.findBy(emai && name && doj )---> something like this 















//route3 : it is used to update the existing notes of a user 
router.put('/update/:id',fetchuser, async(req,res)=>{
console.log("THIS USER REQUESTED "+req.params.id);

    try{
        
        // let user =await  Notes.findOne({updateID: req.body.email});
       
        const {id,title,description,epost,erank,tag,empemail,leaves,chat} = req.body ;
        // console.log("chat is this "+chat);
          

    let todo =await Work.findById(req.params.id);//idhar url mai id attatched hai 
    if(!todo){
       return res.status(404).send("NOT FOUND !!!!!");
    }
    //problem here is jisko work diya he is trying to access work-distributer database
        // console.log("user who is requesting is :"+req.user.id+" "+req.user.name);
        // console.log("the user from database is :"+todo.user.toString()+" "+todo.user.name);
        console.log(todo.user.email+" "+req.body.empemail);
    // if(todo.user.toString() !== req.user.id)
    // {
    //     return res.status(401).send("X X X NOT ALLOWED X X X X");
    // }
    // according to chat gpt what i have understood till now is we found corresponding work with req.params.id and the user who created this work can be found using todo.user
    //todo is work with id that we are giving with url 
    // so is this authentication also required in work database or it should be only in notes 
// bhai idhar dhyan dene walli baat yeh hai ki req.user.id jo hai vo employee ki id hai jo humne work database se find kari thi as work.find(targetEmail)




        const newTask  = {};
        if(id){newTask.id = id};
        if(description){newTask.description = description};
        if(title){newTask.title = title};
        if(epost){newTask.epost = epost};
        if(erank){newTask.erank = erank};
        if(leaves){newTask.leaves = leaves};
        if(empemail){newTask.empemail = empemail};
        if(tag){newTask.tag = tag};
        if(chat){newTask.chat = todo.chat+"\n\n"+chat;console.log('chat is this '+chat);};
        // if(time){newNote.time = time};
        // if(alarmTime){newNote.alarmTime = alarmTime};
        // if(shareEmail){newNote.shareEmail = shareEmail};
        
        console.log("NEW TASK"+newTask);
    // finding the note  to get updated and making sure this note belongs to the same person who requested for it 

    // let todo =await Work.findById(req.params.id);//idhar url mai id attatched hai 
    // if(!todo){
    //    return res.status(404).send("NOT FOUND !!!!!");
    // }
    

    // if(todo.user.toString() !== req.user.id)
    // {
    //     return res.status(401).send("X X X NOT ALLOWED X X X X");
    // }
   
   
    let user =await  Work.find({title: newTask.title});
   

        console.log("NEW Work IS THIS"+newTask.title);
        console.log(todo);

    
    todo = await Work.findByIdAndUpdate(req.params.id,{$set : newTask}, {new :true}) ;
    


   res.json({todo,success:true});
   
   console.log("updated notes"+todo);
   
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("INTERNAL SERVER  ERROR ");
    }
})






//either make -----> a different database ----> refrencing user email (it is unique)  ---> or only those are allowed which are employee of BOSS 
// fetch all employees of boss email
//it will take 0{n) Work.findBy(tatgetEmail)
//work.findBy(role)




//route4 : it is used to delete the existing notes of a user 
router.delete('/delete/:id',fetchuser, async(req,res)=>{


    try{
        
        
        
        
        
        
    // finding the note  to get deleted and making sure this note belongs to the same person who requested for it 

    let todo =await Work.findById(req.params.id);
    if(!todo){
       return res.status(404).send("NOT FOUND !!!!!");
    }

    

    

    if(todo.user.toString() !== req.user.id)
    {
        return res.status(401).send("X X X NOT ALLOWED X X X X");
    }
    //  let work =await Work.findById(req.params.id);
    
    const work = await Work.findById(req.params.id);
    console.log('work given is '+work);
    const user =   User.find({email:work.empemail});
    console.log('user is '+user);
    const abc  =new Accomplish({title:work.title,user:user.id,email:work.empemail});
    const saved = abc.save();
    todo = await Work.findByIdAndDelete(req.params.id) ;
   res.json({"SUCCESS":" DELETED ", todo:todo});
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("INTERNAL SERVER  ERROR ");
    }
})


router.put('/fetchallacc',async (req,res)=> {
  try{
   const {email}=req.body;
   console.log("requested mail is this "+email);
   const notes = await Accomplish.find({email:email});
   console.log(notes);
   res.json(notes);
   }
   catch(error)
   {
       console.error(error.message);
       res.status(500).send("INTERNAL SERVER  ERROR ");
   }
   })


module.exports = router ;  


/*


// Import required libraries
const crypto = require('crypto');
const fs = require('fs');
const { publicKeyFromPem, privateKeyFromPem } = require('crypto-key-utils');
const { createCipheriv, createDecipheriv } = require('crypto');

// Define the message to be sent
const message = "Hello, this is a secure message.";

// Define the shared secret key
const sharedKey = crypto.randomBytes(16);

// Generate SHA-256 hash of the message
const messageHash = crypto.createHash('sha256').update(message).digest();

// Encrypt the hash with RSA
const receiverPublicKey = publicKeyFromPem(fs.readFileSync('receiver_public_key.pem'));
const encryptedHash = crypto.publicEncrypt({ key: receiverPublicKey }, messageHash);

// Encrypt the message and hash with AES
const cipher = createCipheriv('aes-128-gcm', sharedKey, crypto.randomBytes(12));
let ciphertext = cipher.update(message, 'utf-8');
ciphertext += cipher.final('hex');
const tag = cipher.getAuthTag();

// Encrypt the shared key with RSA
const senderPrivateKey = privateKeyFromPem(fs.readFileSync('sender_private_key.pem'));
const encryptedKey = crypto.privateEncrypt({ key: senderPrivateKey }, sharedKey);

// Send the encrypted key, ciphertext, and tag to the receiver
sendToReceiver(encryptedKey, ciphertext, tag);










The sendToReceiver() function will depend on the specific implementation of the messaging system. In a real-world scenario, the function would likely involve sending the encrypted key, ciphertext, and tag over a network connection to the receiver.

Here is an example of a sendToReceiver() function that uses the Node.js http module to send the encrypted data to the receiver as an HTTP POST request:

javascript
Copy code
const http = require('http');

function sendToReceiver(encryptedKey, ciphertext, tag) {
  const data = JSON.stringify({ encryptedKey, ciphertext, tag });
  const options = {
    hostname: 'receiver-server.com',
    port: 80,
    path: '/receive',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
}
This function takes the encrypted key, ciphertext, and tag as arguments and sends them as a JSON payload in an HTTP POST request to the receiver's server. The options object specifies the hostname, port, path, method, and headers for the request. The req object sends the request and handles the response. In this example, we log the response status code and data to the console, but in a real implementation, we would likely handle the response data differently, depending on the application requirements.
















To decrypt the shared secret key with the private key of the receiver, we can use the privateDecrypt method from the crypto module in Node.js. Here is some sample code to perform the decryption:

vbnet
Copy code
// Load the private key of the receiver from the database
const receiver = await User.findById(receiverId);
const receiverPrivateKey = privateKeyFromPem(receiver.privateKey);

// Decrypt the shared key with RSA using the receiver's private key
const encryptedKey = Buffer.from(message.encryptedKey, 'base64');
const sharedKey = crypto.privateDecrypt({ key: receiverPrivateKey }, encryptedKey);
To perform the symmetric key decryption of the message and signature (using AES), we can use the createDecipheriv method from the crypto module in Node.js. Here is some sample code to perform the decryption and verify the signature:

php
Copy code
// Decrypt the message with AES using the shared key
const iv = Buffer.from(message.iv, 'hex');
const ciphertext = Buffer.from(message.encryptedMessage, 'hex');
const tag = Buffer.from(message.tag, 'base64');
const decipher = createDecipheriv('aes-128-gcm', sharedKey, iv);
decipher.setAuthTag(tag);
let plaintext = decipher.update(ciphertext, 'binary', 'utf8');
plaintext += decipher.final('utf8');

// Verify the message hash using the decrypted signature
const decryptedHash = crypto.privateDecrypt({ key: receiverPrivateKey }, Buffer.from(message.encryptedHash, 'base64'));
const messageHash = crypto.createHash('sha256').update(plaintext).digest();
const hashMatch = crypto.timingSafeEqual(decryptedHash, messageHash);

// If the hashes match, accept the message; otherwise, reject it
if (hashMatch) {
  // Accept the message
  res.json({ success: true, message: plaintext });
} else {
  // Reject the message
  res.json({ success: false, error: 'Invalid signature' });
}
Note that the timingSafeEqual method is used to compare the decrypted hash and the hash of the decrypted message in a constant time manner to avoid timing attacks.





*/
const express = require('express');

// var fetchuser = require('./middleware/fetchuser');
const router = express.Router();
var cron = require('node-cron');

router.get('/schedulesms',async(req,res)=>{
const {hrs,min,sec} = req.body ;
console.log("time"+hrs+" "+min+" "+sec);

cron.schedule(`*/${min} */${hrs} * * *`, () => {
  console.log('running a task according to given hrs min sec ');
});

res.send("All okk!!!!");

})

module.exports = router ;
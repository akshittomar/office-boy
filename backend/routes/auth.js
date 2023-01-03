const express = require('express');
const User = require('../models/User');
const router = express.Router();
//CREATING A USER USING : POST "api/auth/." DOESNOT REQUIRE AUTH 
router.post('/',(req,res)=>{

const user = User(req.body);
user.save();
res.send("obj");
})
module.exports = router ; 
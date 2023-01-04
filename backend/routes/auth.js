const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { default: userEvent } = require('@testing-library/user-event');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//CREATING A USER USING : POST "api/auth/." DOESNOT REQUIRE AUTH 
router.post('/createUser',[
body('name','ENTER A VALID NAME ').isLength({min:3}),
body('email','ENTER A VALID EMAIL').isEmail(),
body('password','ENTER A VALID EMAIL').isLength({min:5}),
],async(req,res)=>{
  // if there are errors return bad request and the errors 
const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the email exisits already 
    try {
  let user =await  User.findOne({email: req.body.email});
  if(user)
  {
    return res.status(400).json({error:"SORRY A USER WITH THIS NAME ALREADY EXISTS "})
  }
  const salt =await  bcrypt.genSalt(10);
 const  secPass =await bcrypt.hash(req.body.password,salt);
  //creating a user 
    user = await  User.create({
      name:req.body.name,
      email:req.body.email,
      password:secPass,
    })
    const data = { 
      user:{
        id:user.id
      }
    }
    const JWT_SECRET = 'AUR LADKE KYA HAL HAI TERE PURA KAM CHAL RHA MAUJ KR '
    const authToken  = jwt.sign(data,JWT_SECRET);
    console.log(authToken);


    // .then(user => res.json(user)).catch(err => {console.log(err);res.json({error:'PLEASE ENTER  A UNIQUE VALUE FOR EMAIL'})});
    res.json({authToken});
  }
  catch(error){
    console.error(error.message);
    res.status(500).send("SOME ERROR OCCURED");
  }
  
})
module.exports = router ;

const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { default: userEvent } = require('@testing-library/user-event');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser = require('./middleware/fetchuser')
//all importing is completed










// ROUTE 1 :CREATING A USER USING : POST "api/auth/createUser" DOESNOT REQUIRE AUTH 
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
    res.status(500).send("INTERNAL SERVER  ERROR ");
  }
  
})








// ROUTER 2 FOE Authenticating  a user with endpoint name /api/auth/login
router.post('/login',[
 body('email','ENTER A VALID EMAIL').isEmail(),
 body('password','PASSWORD CANNOT BE BLANK').exists(),
 ],async(req,res)=>{
//checking for errors in same way as it e=was done aboove 
const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// destructuring karke hmne user ka email, password nikala
const {email,password} = req.body ;
try{
  
let user =await User.findOne({email});

if(!user){
  return res.status(400).json({error:"PLEASE TRY TO LOGIN WITH CORRECT CREDENTIALS"});
}

const passwordCompare =await  bcrypt.compare(password,user.password);//send true is password matched else false 

if(!passwordCompare)
{
  return res.status(400).json({error:"PLEASE TRY TO LOGIN WITH CORRECT CREDENTIALS"});
}

const data = { 
  user:{
    id:user.id
  }
}
const JWT_SECRET = 'AUR LADKE KYA HAL HAI TERE PURA KAM CHAL RHA MAUJ KR '
const authToken  = jwt.sign(data,JWT_SECRET);//user ki id ko istmal krke ek token bna liya 
const canWe = 'I AM A STRING SENT AS RESPONSE CAN I COME TO HEADER '
console.log(authToken);
res.json({authToken});
// res.json({canWe});

}
catch(error){
  console.error(error.message);
  res.status(500).send("INTERNAL SERVER  ERROR ");
}

 })







// ROUTER 3 GET LOGGED IN USER DETAILS WITH POST : /api/auth/getUser here login is required 
router.post('/getuser',fetchuser,async(req,res)=>{
  //1.if we wrote header code here then we have to write header code every where , where authenticated request is required thats it 
  //2. there can be a case where we have to add video calling features to our app, blog features to our app , shop features to our app so, for all this we will add a middelware 
  //3.middelware ek voh function hoga jo har time call hoga jab bhi authenticated request ki call aeygi , isse har bar ka authentication request ka code likhne se bacche ge hum log thats it 
try{
userId=req.user.id;
const user = await User.findById(userId).select("-password");
res.send(user);
}
catch(error){
  console.error(error.message);
  res.status(500).send("INTERNAL SERVER  ERROR ");
}
 
  })



module.exports = router ;

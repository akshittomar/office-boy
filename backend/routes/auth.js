const express = require('express');//express js ki file hai yeh puri 
const User = require('../models/User');//databse ko lekr aagye 
const router = express.Router();
const { body, validationResult } = require('express-validator');// isko install kiya tha bhai yahan express ka validator package hai yeh 
// const { default: userEvent } = require('@testing-library/user-event');
const bcrypt = require('bcryptjs');//bcrypting ko bhi install kiya tha humne bhai 
const jwt = require('jsonwebtoken');//isko bhi install kiya tha humne vro 
var fetchuser = require('./middleware/fetchuser')
//all importing is completed










// ROUTE 1 :CREATING A USER USING : POST "api/auth/createUser" DOESNOT REQUIRE AUTH 
router.post('/createUser',[
body('name','ENTER A VALID NAME ').isLength({min:5}),
body('email','ENTER A VALID EMAIL').isEmail(),
body('password','ENTER A VALID EMAIL').isLength({min:5}),
],async(req,res)=>{
  // if there are errors return bad request and the errors 
  var success = false;
  var error = "" ;
const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success=false;
      // errors.array().map((element)=>{
        // console.log(element);
        // error=element.msg;
        // console.log("i  am running ")
        error="RE-SUBMIT USING COREECT DATA"
       return  res.status(400).json({error,success})
      // })




      
    }
    //check whether the email exisits already 
    try {
  let user =await  User.findOne({email: req.body.email});
  if(user)
  {
    return res.status(400).json({error:"SORRY A USER WITH THIS NAME ALREADY EXISTS ",success})
  }
  const salt =await  bcrypt.genSalt(10);
 const  secPass =await bcrypt.hash(req.body.password,salt);
  //creating a user 
    user = await  User.create({//yeh boht important function use hua idhar User database mai ".create" function keep a eye on it 
      name:req.body.name,//idhar tai kiya humne thunderclient se MongoDB tak ka safar 
      email:req.body.email,
      password:secPass, 
      epost:req.body.epost,
    })
    const data = { 
      user:{
        id:user.id
      }
    }
    const JWT_SECRET = 'AUR LADKE KYA HAL HAI TERE PURA KAM CHAL RHA MAUJ KR '
    const authToken  = jwt.sign(data,JWT_SECRET);
    console.log("tera new user "+authToken);


    // .then(user => res.json(user)).catch(err => {console.log(err);res.json({error:'PLEASE ENTER  A UNIQUE VALUE FOR EMAIL'})});
    success=true;
   return  res.json({authToken,success});
  }
  catch(error){
    console.error(error.message);
    // res.status(500).send("INTERNAL SERVER  ERROR ");
    
  error="INTERNAL SERVER ERROR ";
  
 return  res.status(500).json({error,success});
  }
  
})








// ROUTER 2 FOR Authenticating  a user with endpoint name /api/auth/login
router.post('/login',[
 body('email','ENTER A VALID EMAIL').isEmail(),
 body('password','PASSWORD CANNOT BE BLANK').exists(),
 ],async(req,res)=>{
//checking for errors in same way as it e=was done aboove 
var  success = false ; 
var error = "";
const errors = validationResult(req);
    if (!errors.isEmpty()) {
     
        // error=element.msg;
        error="RE-SUBMIT FORM USING CORRECT CREDENTIALS"
        return res.status(400).json({error,success})


      
      
      
    }
// destructuring karke hmne user ka email, password nikala
const {email,password} = req.body ;
console.log("MERE PASS YEH PARAMETERS HAI"+email+" "+password)
try{
  
let user =await User.findOne({email});

if(!user){
  error="PLEASE TRY TO LOGIN WITH CORRECT CREDENTIALS";
  return res.status(400).json({error,success});
}

const passwordCompare =await  bcrypt.compare(password,user.password);//send true is password matched else false 

if(!passwordCompare)
{
  error="PLEASE TRY TO LOGIN WITH CORRECT CREDENTIALS";
  return res.status(400).json({error,success});
}

const data = { 
  user:{
    id:user.id
  }
}
const JWT_SECRET = 'AUR LADKE KYA HAL HAI TERE PURA KAM CHAL RHA MAUJ KR '
const authToken  = jwt.sign(data,JWT_SECRET);//user ki id ko istmal krke ek token bna liya 

console.log(authToken); 
success = true ;

res.json({authToken,success});
// res.json({canWe},);

}
catch(error){
  console.error(error.message);
  error="INTERNAL SERVER ERROR ";
  res.status(500).json({error,success});
}

 })







// ROUTER 3 GET LOGGED IN USER DETAILS WITH POST : /api/auth/getUser here login is required 
router.post('/getuser',fetchuser,async(req,res)=>{
  // console.log("INSIDE EXPRESS");
  // console.log(req); 
try{
let userId=req.user.id;
const user = await User.findById(userId).select("-password");
console.log("user is this ",user);
res.send(user);}
catch(error){
  console.error(error.message);
  res.status(500).send("INTERNAL SERVER  ERROR ");
}
 
  })



module.exports = router ;

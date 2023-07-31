const express = require('express');
require('dotenv').config();

const router = express.Router();
const nodemailer = require('nodemailer');
router.put('/sendmail',async(req,res)=>{
    const PASS = process.env.PASS;

const {mail,subject,description}=req.body;
console.log("THE REQUESTED EMAIL IS "+mail+" "+subject+" "+description);
const mailoptions={
            from:'nodejs961@gmail.com',
            to:mail,
            subject:subject,
            text:description
    
        }
        const transporter = nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'nodejs961@gmail.com',
                        pass:PASS
                    }
                })
                transporter.sendMail(mailoptions,(error,info)=>{
                            if(error){
                                console.log(error);
                            }
                            else{
                                console.log("Email sent bro "+info.response);
                            }
                        })

res.json("All okk in mail component !!!!");
})
module.exports = router ;
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
router.get('/sendmail',async(req,res)=>{
const {mail}=req.body;
console.log("THE REQUESTED EMAIL IS "+mail);
const mailoptions={
            from:'nodejs961@gmail.com',
            to:'akshitt125@gmail.com',
            subject:'EMAIL FROM NODE.JS ',
            text:'HELLO FROM NODE.JS'
    
        }
        const transporter = nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'nodejs961@gmail.com',
                        pass:'ezrmyupskojmobil',
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

res.send("All okk in mail component !!!!");
})
module.exports = router ;
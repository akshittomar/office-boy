// import React from 'react'
// // const nodemailer = require('nodemailer');
// export default function Email() {
//     //EMAIL MESSAGE OPTIONS
    
//     const mailoptions={
//         from:'nodejs961@gmail.com',
//         to:'akshitt125@gmail.com',
//         subject:'EMAIL FROM NODE.JS ',
//         text:'HELLO FROM NODE.JS'

//     }
//     //EMAIL TRANSPORT CONFIGURATION 
//     const transporter = nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:'nodejs961@gmail.com',
//             pass:'Off!ce-boy@2424',
//         }
//     })
// const handelOnClick=()=>{
//     transporter.sendMail(mailoptions,(error,info)=>{
//         if(error){
//             console.log(error);
//         }
//         else{
//             console.log("Email sent bro "+info.response);
//         }
//     })
// }

//   return (
//     <div>Email
//         <button onClick={handelOnClick}>SEND MAIL</button>
//     </div>
//   )

// }
import React from 'react'

export default function Email() {
  return (
    <div>Email</div>
  )
}

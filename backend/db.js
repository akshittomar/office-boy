const mongoose = require('mongoose')// MONGOOSE KO USE KRNE KA TARIKKA HAI YEH 


const mURI =  "mongodb://localhost:27017/"// CREATED DATABSE NE LINK DIYA VO HUMNE IDHAR LAGAYA 

const connection = () =>{// EK FUNCTION HAI JO MONGOOSE K MADAT SE MONGODB K URL KO CONNECT KREGA 
    mongoose.connect(mURI,()=>{
        console.log("CONNECTED SUCCESFULLY PAPA JI"); 
    })
}
module.exports = connection;//CONNECTION FUNCTION KO EXPORT KIYA 
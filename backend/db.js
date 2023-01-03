const mongoose = require('mongoose');


const mURI =  "mongodb://localhost:27017/"

const connection = () =>{
    mongoose.connect(mURI,()=>{
        console.log("CONNECTED SUCCESFULLY "); 
    })
}
module.exports = connection;
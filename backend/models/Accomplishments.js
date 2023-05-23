const mongoose = require('mongoose');
const {Schema} = mongoose;
const Accomplishments = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,//foreign key 
        ref:'User',//foreign key refrencing user database
        
    },
   title:{
        type:String,
        required:true,
    },
    email:{
type:String,

    }
    
})
const Accomplish = mongoose.model('ACCOMP',Accomplishments);

module.exports = Accomplish;

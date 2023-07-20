const mongoose = require('mongoose');
const {Schema} = mongoose;
const WorkDistributer = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,//foreign key 
        ref:'User',//foreign key refrencing user database
        
    },
    empemail:{
        type:String,
        
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    epost:{
        type:String,
        required:true,
    },
    erank:{
        type:Number,
        required:true,
    },
    leaves:{
        type:Number,
        default:0,
    },  
    tag:{
        type:String,
        default:"Personal",
    },
    chat:{
        type:String ,
        default:"",
    },
    empname:{
        type:String
    },
    edoj:{
        type:Date
    }

})
const Work = mongoose.model('WORK',WorkDistributer);

module.exports = Work;

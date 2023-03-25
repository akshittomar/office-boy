const mongoose = require('mongoose');
const {Schema} = mongoose;
const MyWork = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,//foreign key 
        ref:'User',//foreign key refrencing user database
    },
    workemail:{
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
    wpost:{
        type:String,
        required:true,
    },
    wrank:{
        type:Number,
        required:true,
    },
    wleaves:{
        type:Number,
        default:0,
    },  
    tag:{
        type:String,
        default:"Personal",
    }

})
const MyTask = mongoose.model('MyWork',MyWork);

module.exports = MyTask;

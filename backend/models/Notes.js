const mongoose = require('mongoose');
const {Schema} = mongoose;
const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,//foreign key
        ref:'USER',
    },
    
    title:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        
        required:true 
    },
    tag:{
        type:String,
        default:"Genral"
        
    },
    date:{
        type:Date,
        default:Date.now
    },
    time:{
        type:String,
        default:"4"
    },
    alarmTime:{
        type:String,
        default:"4"
    },
    shareEmail:{
        type:String,
    }

  });

  module.exports = mongoose.model('NOTES',NotesSchema);
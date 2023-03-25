const mongoose = require('mongoose');
const {Schema} = mongoose;
const imgSchema = new Schema({
    img:{
        data:Buffer,
        type:Buffer
    
    }
});
const ImageModel = mongoose.model('Image',imgSchema);

module.exports = ImageModel;

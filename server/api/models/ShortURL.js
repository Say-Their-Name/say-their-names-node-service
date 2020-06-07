const mongoose = require('mongoose');

const shortURL = new mongoose.Schema({
   
    full: {
        type:String,
        required:true
    },
    shortURL:{
        type:String,
        required:true
    },
    original_parameter_value: {
        type:String,
        required:true
    },
    clicks:{
        type: Number,
        required: true,
        default: 0
    }
    
});


const ShortURL = mongoose.model('ShortURL',shortURL);

exports.ShortURL = ShortURL;
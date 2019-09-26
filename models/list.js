const mongoose = require('mongoose');
var listSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    mobileNumber:{
        type:Number
    }
});
mongoose.model('List', listSchema);
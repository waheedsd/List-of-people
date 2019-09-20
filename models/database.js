const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/ListOfPeople',{useNewUrlParser:true},(err)=>{
    if(!err){console.log('monogdb connection established')}
    else{console.log("Error in DB Connection"+err)}
});

require('./list');
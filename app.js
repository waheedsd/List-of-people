const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send("Express");
})
app.listen(3000,function(){
    console.log("Port Listening to 3000");
})
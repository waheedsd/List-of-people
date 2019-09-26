
require('./models/database');

const express = require('express');
var app = express();
const path = require('path');
const expressHandleBars = require('express-handlebars');
const listController = require('./controller/listController');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname, 'views/'));
app.engine('hbs',expressHandleBars({extname:'hbs',defaultLayout:'mainlayout', layoutsDir:__dirname + '/views/layouts/'}));
app.set('view engine','hbs');


app.listen(3000,function(){
    console.log("Port Listening to 3000");
}); 
app.use('/list',listController);
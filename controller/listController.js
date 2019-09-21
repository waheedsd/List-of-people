const express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const List = mongoose.model('List');
router.get('/',(req,res)=>{
    res.render("list/addoredit",{
        viewtitle : "List of people"
    });
})

router.post('/',(req,res)=>{
    insertRecord(req,res);
})
function insertRecord(req,res){ 
    var list = new List();
    list.name = req.body.Name;
    list.age = req.body.Age;
    list.gender = req.body.Gender;
    list.mobileNumber = req.body.mobileNumber;
    list.save((err,doc)=>{
        if(!err){
            res.redirect('list/show');
        }
        else{
            console.log("Error during insertion"+err);
        }
    })
}
router.get('/details',(req,res )=>{
    List.find((err,docs)=>{
        if(!err){
            res.render("list/details",{
                details:docs
            });
            return;
        }
        else{
            console.log("Error in rendering List details"+err);
        }
    })
})

router.get('/:id',(req,res)=>{
    List.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("list/addoredit",{
                viewtitle:"update list",
                listdetails:doc
            })
        }
    });
});
module.exports = router;
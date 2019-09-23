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
    if(req.body._id == ""){
        insertRecord(req,res);
    }
    else{
        updateList(req,res);
    }
    
})
function insertRecord(req,res){ 
    var list = new List();
    list.name = req.body.Name;
    list.age = req.body.Age;
    list.gender = req.body.Gender;
    list.mobileNumber = req.body.mobileNumber;
    list.save((err,doc)=>{
        if(!err){
            res.redirect('list/details');
            viewtitle : "Insert List";
            list : req.body;
            console.log(list)
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

mongoose.set('useFindAndModify', false);
function updateList(req,res){
    List.findOneAndUpdate({_id: req.body._id}, req.body,{new:true},(err,docs)=>{
        if(!err){
            res.redirect('list/details');
        }
        else{
            console.log("update record"+err);
        }
    })
}

router.get('/:id',(req,res)=>{
    List.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("list/addoredit",{
                viewtitle:"Update list",
                list:doc
                
            });
        }
        else{
            console.log(err);
        }
        
    });
});

router.get('/delete/:id',(req,res)=>{
    List.findByIdAndRemove(req.params._id,(err,doc)=>{
        if(!err){
            res.redirect('list/details');
        }
        else{
            console.log("Deleting Record"+err);
        }
    })
})
module.exports = router;
const express = require('express');
var router = express.Router();
router.get('/',(req,res)=>{
    res.render("list/addoredit",{
        viewtitle : "List of people"
    });
})

router.post('/',(req,res)=>{
    console.log(req);
})
module.exports = router;
var express = require('express');
var mongodb= require('mongodb');
var router = express.Router();

var techinfo = mongodb.MongoClient;

router.post('/',(req,res)=>{
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_sal = req.body.e_sal;

    var obj =  {
        "e_id" : e_id,
        "e_name" : e_name,
        "e_sal" : e_sal
    };

    techinfo.connect('mongodb://localhost:27017/crud',
    (err,db)=>{
        db.collection('employees').insertOne(obj,function(err,result){
            if(err){
                res.send({"insert":"fail"});
            }
            else{
                res.send({"insert":"success"});
            }
        })
    });
});
module.exports = router;
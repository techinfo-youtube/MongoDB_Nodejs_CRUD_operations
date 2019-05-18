var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();

var techinfo = mongodb.MongoClient;

router.get("/",(req,res)=>{
    techinfo.connect("mongodb://localhost:27017/crud",
                        (err,db)=>{
        db.collection("employees").find()
                                .toArray((err,array)=>{
            res.send(array);
        });
    });
});
module.exports = router;
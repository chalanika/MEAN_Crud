var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var mongo = require('mongoose');

var db = mongo.connect("mongodb+srv://de:69pB8401QOeDkzpk@crud-vlmyr.mongodb.net/admin?retryWrites=true&w=majority",function(err,response){
    if(err){console.log(err);}
    else {console.log('connected to '+db,'+',response);}
});

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','http://GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credential',true);
    next();
});

var Schema = mongo.Schema;

var UserSchema = new Schema({
    name:{type:String},
    address:{type:String},
},{versionKey:false});

var model = mongo.model('users',UserSchema,'users');

app.post("/api/SaveUser",function(req,res){
    var mod = new model(req.body);
    mod.save(function(err,data){
        if(err){res.send(err);}
        else{res.send({data:"Record has been inserted"})}
    });
});

app.post("/api/UpdateUser",function(req,res){
    var mod = new model(req.body);
    mod.findByIdAndUpdate(req.body._id,{name:req.body.name, address:req.body.address},
    function(err,data){
        if(err){res.send(err);}
        else{res.send({data:"Record has been updated"});}
    });
});

app.delete('/api/deleteUser',function(req,res){
    var mod = new model(req.body);
    console.log(mod);
    mod.remove(req.body._id,function(err){
        if(err){res.send(err);}
        else{res.send({data:"Record has been deleted"});}
    });
})

app.get("/api/getUser",function(req,res){
    model.find({},function(err,data){
        if(err){res.send(err);}
        else{res.send(data);}
    });
})

app.listen(8080,function(){
    console.log("listening on port 8080");
})
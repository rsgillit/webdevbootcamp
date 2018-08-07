var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs")
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
app.get("/",function(req,res){
    res.render("home.ejs");
});

app.post("/addfriend", function(req, res){
    friends.push(req.body.friendName);
    console.log(req.body);
    res.redirect("/friends"); 
});

app.get("/friends", function(req, res){
        res.render("friends", {friends: friends}); 
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server is listening");
});
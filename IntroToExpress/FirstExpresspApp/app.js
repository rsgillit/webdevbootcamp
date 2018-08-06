var express = require("express");
var app  = express();

app.get("/",function(req,res){
    res.send("Hi there!");
});

app.get("/bye",function(req,res){
    res.send("GoodBye!!");
});

app.get("/dog",function(req,res){
    res.send("MEOW!!");
});

app.get("/r/:subredditName",function(req,res){
    //console.log(req);
    console.log(req.params);
    res.send("what are you looking for!!");
});

app.get("/r/:subredditName/comments/:id/:title",function(req,res){
    res.send("wow!!");
});

app.get("/r/*",function(req,res){
    res.send("what are you looking for!!");
});

app.get("/*",function(req,res){
    res.send("Page you requested does not exist!!");
});


// "/" => "Hi there!"
// "/bye" => "Goodbye!"
// "/dog" => "MEOW!!"

//Tell Express to listen for reuqest
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server has started!!");
});
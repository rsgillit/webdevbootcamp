var express = require('express');

var app = express();

app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal",function(req,res){
    switch (req.params.animal){
        case 'pig':
            var Message = 'The pig says hi';
            break;
        case 'hen':
            var Message = 'The hen says hi';
            break;
        case 'cow':
            var Message = 'The cow says hi';
            break;
        case 'horse':
            var Message = 'The horse says hi';
            break;
        case 'lion':
            var Message = 'The lion says hi';
            break;
        default:
            var Message = 'default says hi';
            break;
    }
    res.send(Message);
});


app.get("/repeat/:mess/:num",function(req,res){
    var Message = "";
    for(var i=0;i<req.params.num;i++){
        Message = Message + req.params.mess + " ";
    }
    res.send(Message);
});




app.get("/*",function(req,res){
    res.send("Sorry, page not found...What are you doing with your life?");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started!!");
});
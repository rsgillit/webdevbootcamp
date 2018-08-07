
var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search.ejs");
});
app.get("/results",function(req,res){
    var movieName = req.query.movieName;
    var url = "http://www.omdbapi.com/?s=" + movieName+ "&apikey=thewdb";
    request(url, function(error, response, body){
    if(!error && response.statusCode == 200 ){
        var json = JSON.parse(body);
        res.render("results",{json: json});
    }
    
});
});

// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 

//u must append &apikey=thewdb to the end of your url.

app.listen(process.env.PORT, process.env.IP,function(){
console.log("movie app has started"); 
});
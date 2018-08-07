var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("home.ejs");
    //res.send("<h1>welcome to homepage</h1>");
})

app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs", {thing: thing});
});

app.get("/posts",function(req,res){
    var  posts = [
                    {title: "Post 1", author: "Susy"},
                    {title: "Post 2", author: "Gugu"},
                    {title: "Post 3", author: "Rashpal"},
                    {title: "Post 4", author: "Susan"}
                ]
    res.render("posts.ejs", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server is listening");
});
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var seedDB = require("./seeds");

//var User = require("./models/user");
seedDB();
mongoose.connect("mongodb://localhost/yelp_camp",function(err){
    console.log(err); 
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")




app.get("/",function(req,res){
   res.render("landing.ejs"); 
});

app.get("/campgrounds",function(req,res){
    Campground.find({},function(err, allcampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("index",{campgrounds: allcampgrounds});
        }
    });
   //res.render("campgrounds",{campgrounds: campgrounds}); 
});

app.post("/campgrounds",function(req,res){
   Campground.create({name: req.body.name,image: req.body.imageUrl, description: req.body.description},function(err, newlycreated){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/campgrounds"); 
        }
    });
});

app.get("/campgrounds/new",function(req,res){
   res.render("new.ejs"); 
});

app.get("/campgrounds/:id",function(req,res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCapmground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCapmground);
            res.render("show.ejs",{campground: foundCapmground}); 
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started");
})
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
app.use(express.static(__dirname + "/public"));




app.get("/",function(req,res){
   res.render("landing.ejs"); 
});

app.get("/campgrounds",function(req,res){
    Campground.find({},function(err, allcampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index",{campgrounds: allcampgrounds});
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
   res.render("campgrounds/new.ejs"); 
});

app.get("/campgrounds/:id",function(req,res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCapmground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCapmground);
            res.render("campgrounds/show.ejs",{campground: foundCapmground}); 
        }
    });
});

//COMMENT routes
app.get("/campgrounds/:id/comments/new", function(req, res){
    Campground.findById(req.params.id,function(err, campground){
        if(err){
            console.log(err);
        } else{
            res.render("comments/new.ejs",{campground: campground}); 
        }
    });
    
});

app.post("/campgrounds/:id/comments", function(req, res){
    Campground.findById(req.params.id,function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else{
            Comment.create(req.body.comment, function(err,comment){
                if(err){
                    console.log(err);
                    res.redirect("/campgrounds");
                } else{
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started");
})
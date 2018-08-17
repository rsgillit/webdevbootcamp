var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp",function(err){
    console.log(err); 
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

//schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create(
//     {name: "Salmon Creek", 
//     image: "https://quinterecycling.org/wp-content/uploads/Camping.jpg",
//         description: "this is first two"
//     }
//     ,function(err, campground){
//         if(err){
//             console.log(err, campground);
//         }
//         else{
//             console.log("new capmground", campground);
//         }
//     });
// var campgrounds = [
//                     {name: "Salmon Creek", image: "https://quinterecycling.org/wp-content/uploads/Camping.jpg"},
//                     {name: "Granite Hill", image: "http://www.lake-grapevine.com/wp-content/uploads/2010/10/Meadowmere-Park-Camping-small.jpg"},
//                     {name: "Mountain Goat's Rest", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/10/main/hoodview-campground-0510.jpg?itok=xo0RuR6u"},
//                     {name: "Salmon Creek", image: "https://quinterecycling.org/wp-content/uploads/Camping.jpg"},
//                     {name: "Granite Hill", image: "http://www.lake-grapevine.com/wp-content/uploads/2010/10/Meadowmere-Park-Camping-small.jpg"},
//                     {name: "Mountain Goat's Rest", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/10/main/hoodview-campground-0510.jpg?itok=xo0RuR6u"}
//                   ];

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
    Campground.findById(req.params.id, function(err, foundCapmground){
        if(err){
            console.log(err);
        }
        else{
            res.render("show.ejs",{campground: foundCapmground}); 
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started");
})
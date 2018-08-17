var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

var campgrounds = [
                    {name: "Salmon Creek", image: "https://quinterecycling.org/wp-content/uploads/Camping.jpg"},
                    {name: "Granite Hill", image: "http://www.lake-grapevine.com/wp-content/uploads/2010/10/Meadowmere-Park-Camping-small.jpg"},
                    {name: "Mountain Goat's Rest", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/10/main/hoodview-campground-0510.jpg?itok=xo0RuR6u"},
                    {name: "Salmon Creek", image: "https://quinterecycling.org/wp-content/uploads/Camping.jpg"},
                    {name: "Granite Hill", image: "http://www.lake-grapevine.com/wp-content/uploads/2010/10/Meadowmere-Park-Camping-small.jpg"},
                    {name: "Mountain Goat's Rest", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/10/main/hoodview-campground-0510.jpg?itok=xo0RuR6u"}
                  ];

app.get("/",function(req,res){
   res.render("landing.ejs"); 
});

app.get("/campgrounds",function(req,res){
   res.render("campgrounds",{campgrounds: campgrounds}); 
});

app.post("/campgrounds",function(req,res){
   campgrounds.push({name: req.body.name,image: req.body.imageUrl});
   res.redirect("/campgrounds"); 
});

app.get("/campgrounds/new",function(req,res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server has started");
})
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
                    {name: "Salmon Creek", image: "https://quinterecycling.org/wp-content/uploads/Camping.jpg"},
                    {name: "Granite Hill", image: "http://www.lake-grapevine.com/wp-content/uploads/2010/10/Meadowmere-Park-Camping-small.jpg"},
                    {name: "Mountain Goat's Rest", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/10/main/hoodview-campground-0510.jpg?itok=xo0RuR6u"},
                    {name: "Salmon Creek", image: "https://quinterecycling.org/wp-content/uploads/Camping.jpg"},
                    {name: "Granite Hill", image: "http://www.lake-grapevine.com/wp-content/uploads/2010/10/Meadowmere-Park-Camping-small.jpg"},
                    {name: "Mountain Goat's Rest", image: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/10/main/hoodview-campground-0510.jpg?itok=xo0RuR6u"}
                  ];

function seedDB(){
    //remove all campgrounds
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("removed capmgrounds");
        data.forEach(function(seed){
        Campground.create(seed,function(err,campground){
            if(err){
            console.log(err);
            }
            else{
                console.log("added a campground");
                Comment.create({
                   text: "this place is great",
                   author: "Homer"
                }, function(err,comment){
                        if(err){
                            console.log(err);
                        }
                        else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("crate comment",campground);
                        }
                    
                });
            }
        });
    });
    });
    //add campgrounds
    
    
    //add few comments
}

module.exports = seedDB;
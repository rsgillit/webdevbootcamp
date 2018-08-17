var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
                                        name: String, 
                                        age: Number,
                                        temperament: String
                                    });

 var Cat = mongoose.model("cat", catSchema);
var george = new Cat({
    "name": "Norris", "age": 12, "temperament": "bad"
});

george.save(function(err, cat){
    if(err){
        console.log("something went wrong with",cat);
    }
    else{
        console.log("We saved a cat",cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("error",err);
    }
    else{
        console.log("all the cats",cats);
    }
});

Cat.create({
    "name": "Newone", "age": 12, "temperament": "bad"
},function(err, cat){
    if(err){
        console.log("something went wrong with",cat);
    }
    else{
        console.log("We saved a cat",cat);
    }
});
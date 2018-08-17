var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
 
var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//     email: "rashpal@brown.edu",
//     name: "rashpal Brown",
//     posts: [
//         { title: "asdad", content: "sdfsf"},
//         { title: "asdad", content: "sdfsf"},
//         { title: "asdad", content: "sdfsf"}
//         ]
// });

// newUser.posts.push({
//     title: "How to bre polyjuice potion",
//     content: "goto class"
// });
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples:",
//     content: "They are delicious"
// });

// newPost.save(function(err, user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });

User.findOne({name: "rashpal Brown"}, function(err, user){
    if(err){
        console.log(err);
    }
    else{
        user.posts.push({
            titles: "3 things we ht",
            content: "junk junk"
        });
        user.save();
        console.log(user);
    }
});
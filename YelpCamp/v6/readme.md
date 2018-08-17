# yelpcamp
* add landing camp
* add capmgrounds page that lists all capmgrounds

# Each campground has:
* Name
* Image
* 
# layout and basic styling
* create our header and footer partials
* Add in bootstrap

# Creating New Campgrounds
* setup new campground POST route
* Add in body-parser
* setup route to show form
* Add basic unstyled form

# Style the campgrounds page
* Add a better header/title
* Make compgrounds display in a grid

# Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

# Add Mongoose
* Install and configure mongoose
* Setup capmground model
* use campgorund model insite of our routes!

# Show page
* Review the RESTful routes we have seen so far
* Add description to our capmground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES
name      url        verb     description
=========================================
INDEX     /dogs       GET      Display a list of all dog
NEW       /dogs/new   GET      Displays a form to make a new dog
CREATE    /dogs       POST     Add new dog to DB
SHOW      /dogs/:id   GET      Shows info about one dog

INDEX   /campgrounds        GET
NEW     /campgrounds/new    GET
CREATE  /campgrounds        POST
SHOW    /campgrounds/:id    GET

NEW     /campgrounds/:id/comments/new    GET
CREATE  /campgrounds/:id/comments        POST

# Refactor models
* Create a models directory
* Use model.exports
* require verything correctly
 

# Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts
 

# Add the comment Model
* Make our errors go away!
* * Display comments on campground show page

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

# Style Show Page
* Add sidebar to show page
* Display comments nicely

# Finish Styling Show page
* Add public directory
* Add custom stylesheet

# Add User Model
* Install all packages needed for auth
* Define User model

# Register
* Configure Passport
* Add register routes
* Add register template

# Login
* Add login routes
* Add login template

# Logout/Navbar
* Add logout route
* Prevent user from adding comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

# navbar links
* Show hide auth links in navbar correctly

# user comments
* Associate users
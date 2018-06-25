var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var campgrounds = [
    {name: "jsjs", image: "https://images.pexels.com/photos/556414/pexels-photo-556414.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {name: "hshgs", image: "https://images.pexels.com/photos/556414/pexels-photo-556414.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing") ;
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res) {
    campgrounds.push({name: req.body.name, image: req.body.image});
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp server running");
});

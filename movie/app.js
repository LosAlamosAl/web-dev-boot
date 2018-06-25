var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search.ejs");
});

app.get("/search", function(req, res) {
    var term = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + term + "&apikey=thewdb";
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var parseData = JSON.parse(body);
            res.render("results.ejs", {parseData: parseData});
        } else {
            console.log("Error:" + error);
        }
    });
});
    
app.get("/github", function(req, res) {
    var options = {
        url: "https://api.github.com/users/mcpherson/repos",
        headers: {
            "User-Agent": "mcpherson"
        } 
    };
    
    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var parseData = JSON.parse(body);
            res.render("github.ejs", {parseData: parseData});
        } else {
            console.log(error);
        }
    });
});
    


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Starting on: " + process.env.PORT + " at: " + process.env.IP);
});

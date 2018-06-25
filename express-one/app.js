var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Welcome") ;
});

app.get("/speak/:animal", function(req, res) {
    if (req.params.animal === "dog") {
        res.send("Woof!");
    } else
    if (req.params.animal === "snake") {
        res.send("Hissss");
    } else {
        res.send("NO SUCH ANIMAL");
    }
});

app.get("/:word/:count", function(req, res) {
    var s = "";
    for (var i=0; i<parseInt(req.params.count, 10); i++) {
        s += req.params.word;
        s += " ";
    }
    res.send(s);
});

app.get("*", function(req, res) {
    res.send("Loser! No such route!") ;
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Starting on: " + process.env.PORT + " at: " + process.env.IP);
});

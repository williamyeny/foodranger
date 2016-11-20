var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// var favicon = require('serve-favicon');

var port = process.env.PORT || 8080;

var games = {};

app.use(express.static("public"));
// app.use(favicon(__dirname + '/favicon.ico'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {

  res.render('index');
});

app.get("/reg-res", function(req, res) {
  res.render('reg-rest');
});

app.get("/want-food", function(req, res) {
  res.render('want-food');
});

app.post("/submit-res", function(req, res) {
  // console.log(req.body);
  res.send(req.body.restName + " " + req.body.location);
  // res.redirect("/");
})


var server = app.listen(port, function() {
  console.log("server started, go to localhost:8080");

});

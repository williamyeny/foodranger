var express = require("express");
var app = express();
// var favicon = require('serve-favicon');

var port = process.env.PORT || 8080;

var games = {};

app.use(express.static("public"));
// app.use(favicon(__dirname + '/favicon.ico'));
app.set("view engine", "ejs");

app.get("/", function(req, res) {

  res.render('index');
});

app.get("/reg-res", function(req, res) {
  res.render('reg-rest');
})


var server = app.listen(port, function() {
  console.log("server started, go to localhost:8080");

});

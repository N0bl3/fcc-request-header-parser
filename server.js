var express = require('express');

var app = express();
var useragent = require('express-useragent');
app.use(useragent.express());
app.enable("trust proxy");
app.get("/", function(req, res){
  res.redirect("/me");
});

app.get("/me", function(req, res){
  var me = {
    ip: req.ip,
    software: req.useragent.os,
    language: req.get("Accept-Language")
  };
  res.end(JSON.stringify(me));
});

app.listen(process.env.PORT || 3000, function(){
   console.log("Server listening on port " + process.env.PORT || 3000);
});

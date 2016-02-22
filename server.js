var express = require('express');

var app = express();

app.get("/", function(){
  app.redirect("/me");
});

app.get("/me", function(req, res){
  var me = {
    ip: req.ip,
    software: req.get("User-Agent"),
    language: req.get("Accept-Language")
  };
  res.end(JSON.stringify(me));
});

app.listen(process.env.PORT || 3000, function(){
   console.log("Server listening on port " + process.env.PORT || 3000);
});

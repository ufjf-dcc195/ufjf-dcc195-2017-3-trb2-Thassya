var express = require("./config/express");

var app =express();


app.listen(3000);
console.log("executando em localhost:3000");

module.exports = app;
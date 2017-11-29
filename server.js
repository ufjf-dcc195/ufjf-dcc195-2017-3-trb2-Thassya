var express = require("./config/express");

var app = express();
var porta = process.env.PORT || 3002

app.listen(porta);
console.log("Escutando em http://localhost:3001");

module.exports = app;
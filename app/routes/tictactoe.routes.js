module.exports = function (app) {
    var handlers = require("../controllers/tictactoe.controllers");
    app.use("/jogovelha.html", handlers.jogo);
  };
  
  
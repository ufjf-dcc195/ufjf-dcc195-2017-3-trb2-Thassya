module.exports = function (app){
    var handlers = require("../controllers/mediador.controllers");
    app.use("/amigooculto.html", handlers.amigooculto);
    app.post("/adicionaNome", handlers.adicionaNome);
};
  
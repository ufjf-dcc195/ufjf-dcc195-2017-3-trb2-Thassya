module.exports = function (app){
    var handlers = require("../controllers/quadribol.controllers");
    app.use("/quadribol.html",handlers.formacaotimes);
    app.post("/rodada", handlers.rodadas);
};
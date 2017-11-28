module.exports.sobre = function (req, res, next){
    res.render('sobre',
        {nomet: "Thassya de Souza Abreu",cursot: "Sistemas de Informação", matriculat: "200876005",emailt: "thayowisky@gmail.com", 
        nomej: "Júlio César Rosa Trindade", cursoj: "Sistemas de Informação", matriculaj: "201376004", emailj: "julio.rosatrindade@gmail.com"});
  };
  
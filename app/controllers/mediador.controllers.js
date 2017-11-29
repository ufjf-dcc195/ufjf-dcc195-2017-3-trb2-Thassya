var listanomes;

module.exports.amigooculto = function(req,res,next){
    if(req.method=='GET'){        
        console.log(req.body);
        res.render("amigooculto/mediador", {nomes: listanomes});
    }
};

module.exports.adicionaNome = function(req,res){
   var nome = req.body.nome;
    console.log(nome);

    res.render("amigooculto/mediador", {nomes: nome});
};
var listanomes;

module.exports.amigooculto = function(req,res,next){
    if(req.method=='GET'){
        console.log("GET");
        res.render("amigooculto/mediador")
      }else if(req.method=='POST'){
        var nomes = req.body.nomes.split(",");
        var pares = []
        var contaPar=0;
        var numParticipantes = nomes.length
        for(var i=0;i<numParticipantes-1;i++){
          pares[contaPar]={ 'nome1': nomes[i],'nome2': nomes[i+1]}
          contaPar++;
        }
        pares[contaPar]={nome1:nomes[numParticipantes-1],nome2: nomes[0]}

        console.log("posttt");
        res.render("amigooculto/resultado",{amigos: pares})
      }
};

module.exports.adicionaNome = function(req,res){
   var nome = req.body.nome;
    console.log(nome);

    res.render("amigooculto/mediador", {nomes: nome});
};
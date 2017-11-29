module.exports.formacaotimes =  function(req,res,next){
    if(req.method=="GET"){        
        res.render("quadribol/formacaotimes");
    }
    else if(req.method=="POST"){
        var equipes = req.body.equipes;
        //console.log(equipes);

        var jogos = [];
        var j = 0;
        for(var i = 0; i < equipes.length; i = i+2){
            jogos[j]={equipe1 : equipes[i], equipe2 : equipes[i+1]};
            j++;
        }
        console.log(jogos);
        res.render("quadribol/disposicaojogos", {'Jogos': jogos});
    }
};    

module.exports.rodadas = function(req,res,next){
    
}
module.exports.formacaotimes =  function(req,res,next){

    if(req.method=="GET"){
        req.session.rodada = 0;        
        res.render("quadribol/formacaotimes");
    }
    else if(req.method=="POST"){      
        var equipes = [];  
        equipes = req.body.equipes;     
       
        console.log(equipes);

        req.session.jogos = defineJogos(equipes.length, equipes);
        res.render("quadribol/disposicaojogos", {"jogos": req.session.jogos, "rodada": req.session.rodada});
    }
};    

module.exports.rodadas = function(req,res,next){
    console.log("Session rodada = " + req.session.rodada);

    var jogos = req.session.jogos;
    console.log(jogos);
    
    if(req.session.rodada==3){
        var vencedor = "Sonserina"; 
        res.render("quadribol/vencedor", {"Vencedor": vencedor});
    }
    else {
        req.session.rodada++;
        
        var ganhadores = [];
        for(var i = 1; i < jogos.length; i++){
            if(ganhador()){
                ganhadores[i] = [jogos[i].equipe1];
            }
            else{
                ganhadores[i] = [jogos[i].equipe2];
            }
        } 
        console.log("Ganhadores "+ ganhadores);

        res.render("quadribol/disposicaojogos", {"jogos": req.session.jogos, "rodada": req.session.rodada });
    }
}


var sorteados = [];
var jogos = [];

defineJogos = function(tamEquipes, equipes){
    console.log("tamanho: " + tamEquipes + " ----- Equipes: " + equipes);
    var j = 1;
    for(var i = 1; i < tamEquipes; i = i+2){
        jogos[j]={ equipe1 : equipes[defineRodadas(tamEquipes-1)], equipe2 : equipes[defineRodadas(tamEquipes-1)]};
        j++;
    }
    return jogos;
}

defineRodadas = function(valorMaximo) {

        var sugestao = Math.round(Math.random() * valorMaximo); // Escolher um numero ao acaso   
        

        while (sorteados.indexOf(sugestao) >= 0) {  // Enquanto o numero já existir, escolher outro
            sugestao = Math.round(Math.random() * valorMaximo);
        }
        sorteados.push(sugestao); // adicionar este numero à array de numeros sorteados para futura referência
        return sugestao; // devolver o numero único
   
}

ganhador = function(){
    var randomNumber = Math.random() >= 0.5;
   return true;
}

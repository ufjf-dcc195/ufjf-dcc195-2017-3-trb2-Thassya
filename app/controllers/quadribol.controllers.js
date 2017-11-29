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
        for(var i = 0; i < jogos.length; i++){
            if(ganhador()){
                ganhadores[i] = jogos[i].equipe1;
            }
            else{
                ganhadores[i] = jogos[i].equipe2;
            }
        } 

        sorteados = [];
        req.session.jogos = defineJogos(ganhadores.length, ganhadores);

        console.log(req.session.jogos);

        res.render("quadribol/disposicaojogos", {"jogos": req.session.jogos, "rodada": req.session.rodada });
    }
}


var sorteados = [];

defineJogos = function(tamEquipes, equipes){
    var jogos = [];
    var j = 0;
    for(var i = 0; i < tamEquipes; i = i+2){
        var t1 = defineRodadas(tamEquipes-1);
        var t2 = defineRodadas(tamEquipes-1);

        console.log("t1: " + t1 +  " t2: " + t2);

        jogos[j]={ equipe1 : equipes[t1], equipe2 : equipes[t2]};
        j++;
    }
    return jogos;
}

defineRodadas = function(valorMaximo) {

    console.log(sorteados);

    if(sorteados.length >= valorMaximo){ sorteados = []; }
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

module.exports.jogo = function(req,res,next){
    if(req.method =='GET'){
        res.render("jogovelha/jogo",{tabela:[
          {1:null,2:null,3:null},
          {1:null,2:null,3:null},
          {1:null,2:null,3:null}
        ]})
      }else if(req.method=='POST'){
        console.log(req.body)
        vetor = req.body.jogo;
          console.log(vetor)
        var matriz = [];
        var linha = 0;
        for(var i=0;i<3;i++){
          matriz[i]= {};
          for(var j=0;j<3;j++){
            matriz[i][j]=vetor[j+linha]
          }
          linha+=3;
        }
        console.log(matriz);
        res.render("jogovelha/jogo",{tabuleiro:matriz});
      }
};
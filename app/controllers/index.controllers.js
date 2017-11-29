module.exports.enderecos = function(req,res,next){
    res.render('enderecos',{enderecos : [
      {url:"/",link :"/"},
      {url:"Index",link :"/index.html"},
      {url:"Sobre", link :"/sobre.html"},
      {url: "Amigo Oculto", link: "/amigooculto.html"},
      {url: "Jogo da Velha", link: "/jogovelha.html"},
      {url: "Torneio Quadribol", link: "/quadribol.html"}
    ]});
  };

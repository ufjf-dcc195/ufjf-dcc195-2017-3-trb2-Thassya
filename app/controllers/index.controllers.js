module.exports.enderecos = function(req,res,next){
    res.render('enderecos',{enderecos : [
      {url:"/",link :"/"},
      {url:"Index",link :"/index.html"},
      {url:"Sobre", link :"/sobre.html"}
    ]});
  };

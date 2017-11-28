module.exports.enderecos = function(req,res,next){
    res.render('index',{enderecos : [
      {url:"/",link :"/"},
      {url:"index.html",link :"/index.html"}
    ]});
  };
  
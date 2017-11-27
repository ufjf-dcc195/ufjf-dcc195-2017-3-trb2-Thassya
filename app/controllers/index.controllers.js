module.exports.enderecos = function(req,res,next){
    res.render('enderecos',{enderecos : [
      {url:"/",link :"/"},
      {url:"index.html",link :"/index.html"}
    ]})
  }
  
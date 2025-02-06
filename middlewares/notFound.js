function notFound (req , res , next){
  res.status(404);
  res.json({
    message : 'Risorsa non trovata',
    status : 404,
    err : 'Not Found'
  })
}

module.exports = notFound
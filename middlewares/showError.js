function showError ( err ,req , res , next ){
  res.status(500);
  res.json({
    message : err.message,
    status : 500,
    err : 'Internal Server Error'
  })
}

module.exports = showError
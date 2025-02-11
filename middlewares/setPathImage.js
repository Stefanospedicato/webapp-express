const setPathImage = (req,res,next) => {
  req.setPathImage = `${req.protocol}://${req.get('host')}/movies_cover/`;
  next()
}

module.exports = setPathImage
const index = (req,res) => {
  res.send('Lista movies')
}

const show = (req,re) => {
  const id = req.params.id
  res.send(`Mostro il movie con id= ${id}`)
}


module.exports = {
  index,
  show
}
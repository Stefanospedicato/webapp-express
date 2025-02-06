const connection = require('../data/moviesDB')

const index = (req,res) => {
  
  const sql = 'SELECT * FROM movies'

  connection.query(sql, (err, results) => {
    if(err) return res.status(500).json({err:'Connesione fallita'})
    res.json(results)
  })

}

const show = (req,res) => {
  const id = req.params.id
  res.send(`Mostro il movie con id= ${id}`)
}


module.exports = {
  index,
  show
}
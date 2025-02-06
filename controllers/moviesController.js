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
  
  const sqlMovie = 'SELECT * FROM movies WHERE id=?'
  
  connection.query(sqlMovie,[id],(err,results) => {
    if (err) return res.status(500).json({ error: 'Connessione al database fallita' });
    if (results.length === 0) return res.status(404).json({ err: 'Film non trovato'})
      
    const movie = results[0]
    res.json(movie)
  })
}


module.exports = {
  index,
  show
}
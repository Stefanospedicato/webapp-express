const connection = require('../data/moviesDB')

const index = (req,res) => {
  
  const sql = 'SELECT * FROM movies'

  connection.query(sql, (err, results) => {
    if(err) return res.status(500).json({err:'Connesione fallita'})

    const updatedMovies = results.map(item => {
      return {
        ...item,
        image: req.setPathImage + item.image
      }
    })
   
    res.json(updatedMovies)
  })

}

const show = (req,res) => {

  const id = req.params.id
  
  const movieSql = 'SELECT * FROM movies WHERE id=?'
  const reviewsSql = 'SELECT R.* FROM reviews R WHERE movie_id=?'
  
  connection.query(movieSql,[id],(err,results) => {
    if (err) return res.status(500).json({ error: 'Connessione al database fallita' });
    if (results.length === 0) return res.status(404).json({ err: 'Film non trovato'})

    let movie = results[0]
  
  connection.query(reviewsSql,[id],(err,reviewResults) => {
    if (err) return res.status(500).json({ error: 'Connessione al database fallita' });

    movie.reviews = reviewResults
    res.json(movie)
  })
  })
}


module.exports = {
  index,
  show
}
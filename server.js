const express = require('express');
const app = express();
const port = 3000;

const notFound = require('./middlewares/notFound')
const showError = require('./middlewares/showError')
const moviesRouter = require('./routers/movies')

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req,res) => {
  res.send('Server Movies')
})

app.use('/movies', moviesRouter);

app.use(showError)
app.use(notFound)

app.listen(port, () => {
  console.log(`Sono in ascolto sulla porta ${port}`);
})
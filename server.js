const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const notFound = require('./middlewares/notFound');
const showError = require('./middlewares/showError');
const setPathImage = require('./middlewares/setPathImage');
const moviesRouter = require('./routers/movies');

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.static('public'));
app.use(setPathImage);

app.get('/', (req, res) => {
  res.send('Server Movies');
});

app.use('/movies', moviesRouter);
app.use(showError);
app.use(notFound);

app.listen(port, () => {
  console.log(`Sono in ascolto sulla porta ${port}`);
});

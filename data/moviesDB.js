const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'movies',
  port: 3306
})

connection.connect((err) => {
  if(err) throw err;
  console.log('MySql connesso...');
})

module.exports = connection
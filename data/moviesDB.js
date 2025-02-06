const mysql = require('mysql2')
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  port: process.env.PORT_DB
})

connection.connect((err) => {
  if(err) throw err;
  console.log('MySql connesso...');
})

module.exports = connection
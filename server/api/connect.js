const mysql = require('mysql');

require('dotenv').config({ path: './.env' });

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tugui1006.',
  database: 'db_registro_users'
});

module.exports = { db };

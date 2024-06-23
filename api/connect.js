import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tugui1006.',
  database: 'db_registro_users',
});

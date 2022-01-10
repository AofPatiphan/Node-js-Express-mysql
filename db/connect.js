const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // mysql username
    password: 'AofAof334455!', // mysql password
    database: 'cc10_todo', // database name
    connectionLimit: 20,
});

module.exports = pool;

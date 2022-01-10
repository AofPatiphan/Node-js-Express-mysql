const mysql = require('mysql2/promise');

// Create Connection
// const conPromise = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // mysql username
//     password: 'AofAof334455!', // mysql password
//     database: 'cc10_todo', // database name
// });

// conPromise
//     .then((con) => {
//         console.log('Connect successfully');

// // **** Create Table
// return con.query(`CREATE TABLE users (
//     id INT AUTO_INCREMENT,
//     username VARCHAR(255) NOT NULL,
//     PRIMARY KEY (id)
// )`);

// // **** Insert value to table
// return con.query(
//     'INSERT INTO users(username) VALUE ("hammond"), ("alan")'
// );

// // **** UPDATE
// return con.query('UPDATE users SET username = "Richard" WHERE id = 4');

// // **** DELETE
// return con.query('DELETE FROM users WHERE id = 5');

// // **** SELECT (ดึงข้อมูล)
// return con.query('SELECT id AS userId FROM users');
//     return con.query('SELECT * FROM users');
// })
// .then((result) => {
//     // SELECT result is [rows, fields]
//     // INSERT UPDATE DELETE [resultHeader] affectedRows, insertId, changedRows (Update only)

//     console.log(result[0]);
// })

// .catch((err) => console.log(err.message));

// Create Pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // mysql username
    password: 'AofAof334455!', // mysql password
    database: 'cc10_todo', // database name
    connectionLimit: 20,
});

pool.query('SELECT * FROM users').then((result) => {
    console.log(result[0]);
});

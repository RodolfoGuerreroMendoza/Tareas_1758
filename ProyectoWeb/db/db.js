const mysql = require('mysql2');

// DB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Enriqueclub140',
    database: 'usuarios',
    port: '3306'
});

db.connect(err => {
    if(err) console.error('Error DB:', err);
    else console.log('Conectado a la BD');
});

module.exports = db;
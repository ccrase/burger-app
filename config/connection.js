const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3360,
    user: 'root',
    password: '',
    database: 'burgers_db'
});

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err);
    };
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
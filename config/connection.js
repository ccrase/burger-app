const mysql = require('mysql');

//Set up SQL connection
var connection;

if(process.env.JAWSDB){
    connection= mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: 'burgers_db'
    }); 
};

//Make a connection
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err);
    };
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

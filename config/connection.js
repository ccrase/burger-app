const mysql = require('mysql');

//Set up SQL connection
var connection;

if(process.env.JAWSDB_URL) {
    connection= mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
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

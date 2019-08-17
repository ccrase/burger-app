var connection = require('./connection.js');

var orm = {
    selectAll: function(tableName,callback){
        var query = "SELECT * FROM " + tableName + ";";
        connection.query(query, function(err, res){
            if(err) throw err;
            callback(results);
        });
    },
    insertOne: function(){
        var query = "INSERT INTO ?? (burger_name) VALUES ?";
        connection.query(query, [burgerName], function(err, res){
            if(err) throw err;
            console.log(res);
        });
    },
    updateOne: function(){
        var query = "UPDATE burgers SET ?? = ? WHERE id = ??";
        connection.query(query, [colName, inputValue, idNum], function(err, res){
            if(err) throw err;
            console.log("update successful");
        });
    }
};

module.exports = orm;
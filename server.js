const express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give the server access to them
var router = require('./controllers/burgers_controller');

app.use(router);

//start server so that it can begin listening to client requests
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});


// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");

// INTIALIZE SERVER
const app = express();

// SETS PORT
const PORT = process.env.PORT || 8080;

// SETS SERVER TO HANDLE DATA //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("app"));

// REQUIRED API AND HTML ROUTES //
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app); 

// SERVER LISTENING //
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

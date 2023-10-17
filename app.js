const express = require("express");
const bodyParser = require("body-parser");
//const routes = require("./routes/student");
const router = require("./routes/student");
const connect = require("./db");



const app = express();

app.use(bodyParser.json());

app.use('/', router);

app.listen(3000, () => { 
  connect();
  console.log("Server started on port 3000");
});

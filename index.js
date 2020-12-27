const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Routers = require('./src/router/routers');
const config = require('./src/configs/db.config');
const app = express();
const port = 3000;
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(config.db_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connect to db')
);
 
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connection Successful!");
});
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
  return next()
});
app.use('/', Routers);
 
app.listen(port, function () {
  console.log('server listening on http://localhost:'+port);
});
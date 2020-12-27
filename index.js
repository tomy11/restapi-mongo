const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Routers = require('./src/router/routers');
const app = express();
const port = 3000;
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.use('/', Routers);
 
app.listen(port, function () {
  console.log('server listening on http://localhost:'+port);
});
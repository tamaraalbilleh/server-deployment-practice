'use strict';
const server = require ('./server.js');
require ('dotenv').config();
const PORT = process.env.PORT || 5500;
console.log ('server is running , all is good to go !!');
server.start (PORT);


const express   =   require('express');
const http      =      require('http');
const socket_io = require('socket.io');
const path      =      require('path');
const dotenv    =    require('dotenv');

const application = express();

global.router = express.Router();

const server = http.createServer(application);
const sio    =              socket_io(server);

dotenv.config();

const ejs_config         =         require('./configs/ejs.js');
const body_parser_config = require('./configs/body_parser.js');
const path_config        =        require('./configs/path.js');
const chats_config       =       require('./configs/chats.js');
const socket_io_config   =   require('./configs/socket_io.js');

ejs_config(          application, path);
body_parser_config(        application);
path_config(application, express, path);
socket_io_config(                  sio);

chats_config();

/* --- */

require('./routes/index.js');
require( './routes/chat.js');

application.use('/', global.router);

/* --- */

server.listen
(
    process.env.SERVER_LISTENING_PORT, console.log(`\nServer listening on ${process.env.SERVER_LISTENING_PORT} port`)
);
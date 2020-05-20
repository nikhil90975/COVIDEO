const express = require('express');
const port = 8000;
const app = express();
//const db = require('./config/mongoose');
 //socket
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);;
chatServer.listen(5000);
console.log('chat server is listening on port 5000');



//view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));
app.listen(8000);
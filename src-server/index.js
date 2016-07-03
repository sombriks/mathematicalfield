var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var knex = require('./database');

app.use(express.static('www'));

// make sure that the database is up to date
console.log("Update database schema...");
knex.migrate.latest().then(function(){
  
  console.log("Schema update done!");
    
  io.on('connection', function(socket){
    console.log('a user connected');
  });

  http.listen(3000, function(){
    console.log("Starting Mathematical Field...");
    console.log('listening on *:3000'); 
  });

});
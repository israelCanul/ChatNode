/**
 * Server.js
 * @author : Israel Canul | h
 * @Created on: 13 de oCt , 2015
 */

 //impotacion de librerias necesarias
 var app	= require('express')();
 var http	= require('http').Server(app);
 var io 	= require('socket.io')(http);
 var jquery = require('jquery');

 // agregamos la ruta para recibir las peticiones

 app.get("/chat",function(req,res){
 	res.sendFile(__dirname+'/views/chat.html');
 });

// conexion de los clientes hacia el socket
io.on('connection',function(socket){
	console.log("New user connected");

	// funcion que se encarga de compartir la informacion
	// los clientes
	socket.on('chat message', function(msg) {
    	io.emit('chat message', msg);
    	console.log("monsaje entrante : "msg);
  	});

  	// mostramos en consola cuando un cliente 
  	// se desconecta
  	socket.on('disconnect',function(){
  		console.log("User disconnected");
  	})

});

 /**
 * Iniciamos la aplicación en el puerto 3000
 */
// Start server
http.listen(3000, function() {
  console.log('listening on *:3000');
});
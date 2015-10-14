var mongoose= require('mongoose');
var Message = mongoose.model('Message');

//GET - Funcion para regresar todos los books de la coleccion
//GET - This function return all books on the colection
exports.findAllMessages = function(io) {
    Message.find(function(err, msj) {
      if(err) res.send(500, err.message);
      //console.log('GET /messages'+msj);
      io.emit('chat message', msj);    
	});
	
};

exports.addMessages = function(msg) {
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1; //hoy es 0!
var yyyy = hoy.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

hoy = mm+'/'+dd+'/'+yyyy;

	var message = new Message({
      author   : "Origen"
      , time     : hoy 
      , message  : msg
    });
    
    message.save(function(err, message) {
      if(err) console.log("Error Guardando : "+message);      
      //res.status(200).jsonp(message);
      console.log("Mensaje Guardado : "+message);
    });
};
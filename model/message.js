exports = module.exports = function(app, mongoose) {

	var msj = new mongoose.Schema({
	    author    : String
	  , time     : String
	  , message : String
	});

	mongoose.model('Message',msj);

};

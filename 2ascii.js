var 
	fs = require('fs'),
	path = require('path'),
	file = '16234664/1445146046901.jpg',
	location = path.join('./../4chan/backup/data',file),
	ascii = require('ascii'),
	pic = new ascii(location)
	;

pic.convert(function(err,image){
	console.log(image);
});
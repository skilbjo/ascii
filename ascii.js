var 
	fs = require('fs'),
	path = require('path'),
	file = '16234664/1445146046901.jpg',
	location = path.join('./../4chan/backup/data',file),
	ascii = require('image-to-ascii')
	;

ascii({
	path: location, 
	colored: true,
	reverse: true
	},function(err,image){
	console.log(err || image);
});
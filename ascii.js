var 
	fs = require('fs'),
	path = require('path'),
	data = './data/',
	ascii = require('image-to-ascii')
	;

var getFolders = function(cb){
	var result = []
		;

	fs.readdirSync(data).filter(function(file) {
    if(fs.statSync(path.join(data, file)).isDirectory()){
    	result.push(file);
    }
  });

	cb(result);
};

var getFiles = function(folder,cb){
	var result = []
		;

	fs.readdirSync(path.join(data,folder)).filter(function(file){
		if(!fs.statSync(path.join(data,folder,file)).isDirectory()){
			result.push(path.join(data,folder,file));
		}
	});

	cb(result);
};

var displayImage = function(location){
	ascii({
		path: location, 
		colored: true,
		reverse: true
		},function(err,image){
		console.log(err || image);
	});
};

getFolders(function(folder){
	folder.map(function(item,index){
		getFiles(item,function(files){
			files.map(function(item,index){
				setTimeout(function(){
					displayImage(item);	
				}, (index + 1) * 1000);
			});
		});
	});
});




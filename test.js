var dirWalker = require('./lib/dirWalker');
var fs = require('fs');

function handleFile(path, floor) {
	var blankStr = '';
	for (var i = 0; i < floor; i++) {
		blankStr += '    ';
	}
  
  if(!path.match(/node_modules$/)){
    return;
  }
  
  // remove .bin $
  if(path.match(/bin$/i)){
    console.log('xxx' + path)
    return;
  }
  
	fs.stat(path, function(err1, stats) {
		if (err1) {
			console.log('stat error');
		} else {
			if (stats.isDirectory()) {
        // console.log('+' + blankStr + path);
        
        
        dirWalker.dir(path,function(p){
          console.log(p);
        })
        
			} else {
        // console.log('-' + blankStr + path);
			}
		}
	})
}

dirWalker.walk('.', 0, handleFile);
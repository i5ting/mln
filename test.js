var dirWalker = require('./lib/dirWalker');
var fs = require('fs');
var link = require('fs-symlink')

var file_path = __dirname;
var current_path = process.cwd();


var output = {
  current_path:current_path,
  root_modules:[],
  sub_modules:[]
};



var all = fs.readdirSync('./node_modules');
for(var i in all){
  var path = all[i];
  if(path === '.bin' || path === ".DS_Store"){
     
  }else{
    var p = current_path + '/node_modules/' + path;
    output.root_modules.push(p);
  }
}

function handleFile(path, floor) {
  // console.log(floor)
  // if(floor ==1){
//     return;
//   }
  if(!path.match(/node_modules$/)){  
    return;
  }
  
  
  // console.log(path)
	fs.stat(path, function(err1, stats) {
		if (err1) {
      console.dir(err1);
      // console.log('stat error');
		} else {
			if (stats.isDirectory()) {
        // console.log('+' + blankStr + path);
        
        
        dirWalker.dir(path,function(p){
          console.log(p);
          
          var fs = require('fs')

          var name = p.split('/').pop()
          console.log(name);
          
          if(name === '.bin'){
            return;
          }
          // fs.link(srcpath, dstpath, callback)#
          var srcpath = p;
          var dstpath = "./test_node_modules/" + name;
          
          var packagejson = p + "/package.json"
          
          var package_version = require(packagejson).version;
          var package_description = require(packagejson).description;
          console.log('version = ' + package_version);
          
          output.sub_modules.push({
            name    :name,
            version :package_version,
            path    :p,
            desc    :package_description
          })
          
          var c = JSON.stringify(output, null, 4);
          fs.writeFileSync('./out.json', c);
          //
          var a = dstpath.replace(/.\//,'');
          var b = srcpath.replace(/.\//,'');
      
            var s = current_path + '/' + a;
            var d = current_path + '/' + b
            
          console.log(s)
          console.log(d)
            
          // fs.symlink( d, s, 'junction', function (err, resolvedPath) {
          //   if (err) console.dir(err);
          //   console.log(resolvedPath);
          // });
          
          var file_name = d.split('/').pop();
          
          link(d, 'node_modules/' + file_name,  'junction').then(function () {
           console.log('finished')
          })
          
        })
        
			} else {
        // console.log('-' + blankStr + path);
			}
		}
	})
}

dirWalker.walk('.', 0, handleFile);



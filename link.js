var fs = require('fs')

// fs.link(srcpath, dstpath, callback)#
var srcpath = "./node_modules/bluebird"
var dstpath = "ruan" 

fs.symlink(srcpath, dstpath, function (err, resolvedPath) {
  if (err) throw err;
  console.log(resolvedPath);
});
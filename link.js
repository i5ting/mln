var fs = require('fs')

var srcpath = '/Users/sang/workspace/github/mln/test_node_modules/mkdirp'
var dstpath = '/Users/sang/workspace/github/mln/node_modules/mocha/node_modules/jade/node_modules/mkdirp'
// fs.unlinkSync(srcpath);

// fs.symlink( srcpath, dstpath, 'junction' ,function (err, resolvedPath) {
//   if (err) throw err;
//   console.log(resolvedPath);
// });

var link = require('fs-symlink')
 
link(dstpath, 'test_node_modules/aaa',  'junction').then(function () {
 console.log('finished')
})
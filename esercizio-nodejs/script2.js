const fs = require('fs');

console.log('before read');

var file = fs.readFileSync('./readFile.txt');

console.log('finish read', file);

console.log('after read');
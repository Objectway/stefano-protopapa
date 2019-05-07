const fs = require('fs');

console.log('before read');

fs.readFile('./readFile.txt', function (error, data) {
    console.log('finish read', data);
});

console.log('after read');
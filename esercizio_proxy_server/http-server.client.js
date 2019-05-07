const http = require('http');
const fs = require('fs');
const HttpDispatcher = require('httpdispatcher');

const dispatcher = new HttpDispatcher();

dispatcher.onGet('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenent-Type', 'text/plan');
    fs.readFile('./index.html', function (error, data) {
        res.end(data.toString());
    });
});

dispatcher.onGet('/dona', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenent-Type', 'text/plan');
    fs.readFile('./view/dona.html', function (error, data) {
        res.end(data.toString());
    });
});

dispatcher.onGet('/info', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenent-Type', 'text/plan');
    fs.readFile('./view/info.html', function (error, data) {
        res.end(data.toString());
    });
});

dispatcher.onGet('/api/list', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenent-Type', 'text/html');
    res.end(JSON.stringify([
        {
            name: 'wesley',
            color: 'black'
        },
        {
            name: 'giorgio',
            color: 'orange'
        }
    ]));
});

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function (req, res) {
    dispatcher.dispatch(req, res);  
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/*
const server = http.createServer((req, res) => {
    dispatcher.dispatch(req, res);  
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/
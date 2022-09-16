const connect = require("connect");
const app = connect();

function HelloWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello from Node.JS application');
}

function HTML(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from Node.JS application</h1>');
}

function JSON(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end("'message':'Hello from Node.JS application'");
}

app.use('/html', HTML);
app.use('/json', JSON);
app.use('/', HelloWorld);
app.listen(3000);

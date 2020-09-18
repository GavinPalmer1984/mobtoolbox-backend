const { networkInterfaces } = require('os');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const basicAuth = require('express-basic-auth');
var generatePassword = require('password-generator');
const password = generatePassword(20, true);
console.log('password:', password);

// app.use(basicAuth({
//     users: { 'admin': password }
// }));

let port = 1984;
const log = {};
const peers = {};

if (process.argv[2]) {
    port = parseInt(process.argv[2], 10);
}

io.on('connection', (socket) => {
    socket.on('start timer', (msg) => {
        if (msg.secret === password) {
            io.emit('start timer', msg);
        } else {
            console.log('wrong secret:', msg.secret);
            io.emit('wrong secret');
        }
    });
    socket.on('stop timer', (msg) => {
        if (msg.secret === password) {
            io.emit('stop timer', msg);
        } else {
            console.log('wrong secret:', msg.secret);
            io.emit('wrong secret');
        }
    });
});

app.get('/api/version', (req, res) => {
    res.send();
});

app.use('/', express.static(path.join(__dirname, 'mobtoolbox')));

http.listen(port, () => {
    console.log(`mobtoolbox listening at http://localhost:${port}`)
});

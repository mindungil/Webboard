const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/board', (req, res) => {
    res.sendFile(__dirname + '/html/board.html');
});

app.get('/inform', (req,res) => {
    res.sendFile(__dirname + '/html/inform.html');
});

app.listen(port, ()=> {
    console.log('server is running at http://localhost:3000/');
});

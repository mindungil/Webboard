const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.listen(port, ()=> {
    console.log('server is running at http://localhost:3000/');
});

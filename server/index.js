const express = require('express');
const ejs = require ('ejs');
const path = require('path');

const clientPath = path.join(__dirname,'../client');
const staticPath = path.join(clientPath,'/static');
const viewsPath = path.join(clientPath,"/views");

const app = express();

app.get('/', function(req, res) {
    res.sendFile(staticPath+'/index.html');
});

app.get('/famous', function(req, res) {
    res.sendFile(staticPath+'/famous.html');
});

app.use(express.static(staticPath));



app.listen(2000);


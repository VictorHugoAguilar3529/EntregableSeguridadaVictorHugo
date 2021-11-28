'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var fs = require('fs');
var https = require('https');
var port = 443;
// Conexión Database
https.createServer({
   cert: fs.readFileSync('mi_certificado.crt'),
   key: fs.readFileSync('mi_certificado.key')
 },app).listen(PUERTO, function(){
	console.log('Servidor https correindo en el puerto 443');
});

app.get('./app', function(req, res){
	res.send('Hola, estas en la pagina inicial');
	console.log('Se recibio una petición get a través de https');
});


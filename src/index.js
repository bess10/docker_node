//Aquí arrancaremos el servidor
const express = require('express');
const app = require('./app.js');
//app.use(express.static('public'));

// const router = require('./routes/route.js');
// app.use(router);

app.listen(4000, () => console.log('Server running...'));
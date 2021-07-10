const express = require('express');
const Rutarefrescos = require('./rutas/Rutarefrescos');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/refrescos',Rutarefrescos);


module.exports = app;
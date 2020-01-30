const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/week10', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros
// Query Params: request.query (Filtros ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.listen(3333);
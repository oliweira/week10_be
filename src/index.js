//Gerencias as rotas
const express = require("express");
//Gerencia a conexão da aplicação com o mongod
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require('./routes');

const app = express();

//mongoose.connect('mongodb://localhost:27017/week10', {
//mongoose.connect('mongodb+srv:admin:admin@cluster0-qrlhh.mongodb.net/week10?retryWrites=true&w=majority', {
mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-qrlhh.mongodb.net:27017,cluster0-shard-00-01-qrlhh.mongodb.net:27017,cluster0-shard-00-02-qrlhh.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
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

// o listem serve para executar a aplicação no browser
app.listen(3333);
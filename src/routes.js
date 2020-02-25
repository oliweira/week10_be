const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// routes.post('/devs', (request, response) => {
//     console.log(request.body);
//     return response.json({message: "Ola Povo!"});
// });

//Buscar todos os Devs
routes.get('/devs', DevController.index);
//Buscar Devs específicos
routes.get('/search', SearchController.index);
//Cadastrar um Dev
routes.post('/devs', DevController.store);

module.exports = routes;
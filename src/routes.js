const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// routes.post('/devs', (request, response) => {
//     console.log(request.body);
//     return response.json({message: "Ola Povo!"});
// });

routes.get('/devs', DevController.index);
routes.get('/search', SearchController.index);
routes.post('/devs', DevController.store);

module.exports = routes;
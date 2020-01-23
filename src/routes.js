const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev.js');

const routes = Router();

// routes.post('/devs', (request, response) => {
//     console.log(request.body);
//     return response.json({message: "Ola Povo!"});
// });

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const{ name = login , avatar_url, bio} = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const develop = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    })

    return response.json(develop);
});

module.exports = routes;
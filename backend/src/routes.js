const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Sessions
routes.post('/session', SessionController.create)

// Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Profile
routes.get('/profile', ProfileController.index);

// Incidents
routes.post('/casos', IncidentController.create);
routes.get('/casos', IncidentController.index);
routes.delete('/casos/:id', IncidentController.delete);

module.exports = routes;
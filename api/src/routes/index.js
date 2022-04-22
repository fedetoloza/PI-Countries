const { Router } = require('express');
const { getCountries, getCountriesById } = require('./controllers/country');
const { getActivitiesByName, postActivity } = require('./controllers/activity');
const { Country, Activity, country_activity } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get("/countries", getCountries);
router.get("/countries/:id", getCountriesById);
router.get("/activities", getActivitiesByName);
router.post("/activity", postActivity);

module.exports = router;

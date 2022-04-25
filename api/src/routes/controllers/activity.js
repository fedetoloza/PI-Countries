const { Country, Activity } = require("../../db");

const getActivitiesByName = (req, res) => {
  Activity.findAll({
    attributes: ["name", "difficulty", "duration", "season"],
    include: [{ model: Country, attributes: ["name"] }],
  })
    .then((activities) => {
      res.status(200).send(activities);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
};

const postActivity = async (req, res) => {
  //Recibimos la info de body
  const { name, difficulty, duration, season, countries } = req.body;

  try {
    //Creamos la actividad
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    countries.forEach(async (country) => {
      const countryActivity = await Country.findOne({
        //finOne devuelve la primera instancia encontrada o null si no lo encuentra
        where: { name: country },
      });
      await newActivity.addCountry(countryActivity);
    });
    res.status(200).send({ message: "Activity add successfully" });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getActivitiesByName, postActivity };

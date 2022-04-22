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
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });
        countries.forEach(async (country) => {
            const countryActivity = await Country.findOne({
                where: { name: country },
            });
            await newActivity.addCountry(countryActivity);
        });
        res.status(200).send({ message: "Activity add successfully" });
    } catch (error) {
        res.status(404).send(error);
    }
};

module.exports = {
    getActivitiesByName,
    postActivity
}
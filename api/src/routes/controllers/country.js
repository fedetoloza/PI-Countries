const { Op } = require("sequelize");
const { Country, Activity } = require("../../db");
const axios = require("axios");


const getApiCountries = async function (){
    try {
        let countries = (await axios.get("https://restcountries.com/v3/all")).data;
        countries = await Promise.all(
            countries.map((c)=>{
                Country.findOrCreate({
                    where: {
                        id: c.cca3,
                        name: c.translations.spa.common,
                        flags: c.flags[1],
                        continent: c.continents[0],
                        capital: c.capital? c.capital[0]: "No data",
                        subregion: c.subregion? c.subregion: "No data",
                        area: c.area,
                        population: c.population,
                    },
                });
            })
        );
        return "Database loaded";
    } catch (error) {
        return error;
    }
};

const getCountriesDb = async function(){
    const countries = await Country.findAll({
        attributes: [
            "id",
            "name",
            "flags",
            "continent",
            "capital",
            "subregion",
            "area",
            "population"
        ],
        include: Activity,
    },
    );
    return countries;
};

const getCountriesByName = async function(name){
    const country = await Country.findAll({
        where:{ name:{[Op.iLike]: `%${name}%`}, },
        attributes: ["id", "name", "flags", "continent", "capital", "subregion", "area", "population"],
        include: Activity,
    },);
    return country;
}

const getCountries = async (req, res) => {
    const { name } = req.query;
    let data;
    try {
        if (name) {
            data = await getCountriesByName(name);
            res.send(data);
        } else {
            data = await getCountriesDb();
            data.length > 0?
            res.send(data):
            res.status(400).send({message: "Countries not found"});
        }
    } catch (error) {
        res.send(error);
    }
};

const getCountriesById = async (req, res) => {
    const { idPais } = req.params;
    try {
        let countryId = await Country.findByPk(idPais.toUpperCase(), {
            attributes: ["id", "name", "flags", "continent", "capital", "subregion", "area", "population"],
            include: Activity,
        });
        countryId? res.send(countryId):
        res.status(404).send({message: "Country not found"});
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    getApiCountries,
    getCountriesDb,
    getCountriesByName,
    getCountries,
    getCountriesById,
}
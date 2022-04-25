const { Op } = require("sequelize");
const { Country, Activity } = require("../../db");
const axios = require("axios");

// finddOrCreate busca si existe un registro según las condiciones de búsqueda y
// si no encuentra ninguno procede a crear uno nuevo. Luego retorna la instancia
// creada o encontrada y un booleano indicando cual de los dos caminos tomó
const getApiCountries = async () => {
  try {
    let countries = (await axios.get("https://restcountries.com/v3/all")).data;
    countries = await Promise.all(
      countries.map((country) => {
        Country.findOrCreate({
          where: {
            id: country.cca3,
            name: country.translations.spa.common,
            flags: country.flags[1],
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : "Not found",
            subregion: country.subregion ? country.subregion : "Not found",
            area: country.area,
            population: country.population,
          },
        });
      })
    );
    return "Database loaded";
  } catch (error) {
    return error;
  }
};

const getAllCountries = async () => {
  const countries = await Country.findAll({
    attributes: [
      "id",
      "name",
      "flags",
      "continent",
      "capital",
      "subregion",
      "area",
      "population",
    ],
    include: Activity,
  });
  return countries;
};

const getCountryByName = async (name) => {
  const country = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    attributes: ["id", "name", "flags", "continent", "capital", "subregion", "area", "population"],
    include: Activity,
  });

  return country;
};

const getCountries = async (req, res) => {
  const { name } = req.query;
  let data;
  try {
    if (name) {
      data = await getCountryByName(name);
      res.send(data);
    } else {
      data = await getAllCountries();
      data.length > 0
        ? res.send(data)
        : res.status(404).send({ message: "No se encontraron paises " });
    }
  } catch (error) {
    res.send(error);
  }
};

const getCountriesById = async (req, res) => {
  const { id } = req.params;
  try {
    let countryId = await Country.findByPk(id.toUpperCase(), {
      attributes: [
        "id",
        "name",
        "flags",
        "continent",
        "capital",
        "subregion",
        "area",
        "population",
      ],
      include: Activity,
    });
    countryId
      ? res.send(countryId)
      : res.status(404).send({ message: "Country not found" });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getApiCountries,
  getCountries,
  getCountriesById,
  getAllCountries,
  getCountryByName,
};

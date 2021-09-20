const axios = require("axios");

const BASE_API = "https://restcountries.eu/rest/v2";
const COUNTRY_BY_NAME_ROUTE = "/name";
const ALL_COUNTRIES_ROUTE = "/all";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fetchCountryInfo = (countryName) => {
  const route = BASE_API + COUNTRY_BY_NAME_ROUTE + "/" + countryName;
  return axios.get(route).then((response) => {
    return response.data;
  });
};

const promptCountry = () => {
  return new Promise((resolve, reject) => {
    rl.question("What country do you want information for?", (answer) => {
      resolve(answer);
    });
  })
    .then((country) => {
      console.log("You have selected", country);
      return fetchCountryInfo(country);
    })
    .then((countryInfo) => {
      console.log("countryInfoIs", countryInfo);
      rl.close();
    })
    .catch((e) => {
      console.log("I'm sorry, that didn't work :(.");
      promptCountry();
    });
};

promptCountry();

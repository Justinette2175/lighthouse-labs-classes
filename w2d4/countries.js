const axios = require("axios");

const BASE_API = "https://restcountries.com/v3";
const COUNTRY_BY_NAME_ROUTE = "/name";
const ALL_COUNTRIES_ROUTE = "/all";
const CALLING_CODE_ROUTE = "/callingcode";
const CODE_ROUTE = "/alpha";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fetchCountryInfo = (countryName, subRoute) => {
  const route = BASE_API + subRoute + "/" + countryName;
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
      return fetchCountryInfo(country, COUNTRY_BY_NAME_ROUTE);
    })
    .then((countryInfo) => {
      console.log("countryInfoIs", countryInfo);
      rl.close();
      if (!countryInfo[0]) {
        return;
      }
      return countryInfo[0].borders;
    })
    .then((borderingCountries) => {
      Promise.all(
        borderingCountries.map((c) => {
          return fetchCountryInfo(c, CODE_ROUTE);
        })
      ).then((bordersOfBorders) => {
        console.log(
          "bordersOfBorders",
          JSON.stringify(bordersOfBorders, null, 2)
        );
      });
    })
    .catch((e) => {
      console.log("I'm sorry, that didn't work :(.:", e.message);
      promptCountry();
    });
};

promptCountry();

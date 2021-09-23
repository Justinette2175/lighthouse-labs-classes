const axios = require("axios");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fetchCountryBorderingCountries(countryName) {
  return axios
    .get("https://restcountries.com/v3/name/" + countryName)
    .then((response) => {
      const data = response.data;
      if (!data[0]) {
        return;
      }
      return data[0].borders;
    });
}

function fetchCurrencyInfo(currency) {
  return axios
    .get("https://restcountries.com/v3/currency/" + currency)
    .then((response) => {
      const data = response.data;
      console.log("data is", data);
    });
}

function fetchCountryCodeBorderingCountries(countryCode) {
  return axios
    .get("https://restcountries.com/v3/alpha/" + countryCode)
    .then((response) => {
      const data = response.data;
      return data[0].name;
    });
}

function promptCountry() {
  return new Promise((resolve, reject) => {
    rl.question("What country do you want information for?", (answer) => {
      resolve(answer);
    });
  })
    .then((country) => {
      return fetchCountryBorderingCountries(country);
    })
    .then((borders) => {
      return Promise.all(
        borders.map((countyCode) => {
          return fetchCountryCodeBorderingCountries(countyCode);
        })
      ).then((countries) => {
        console.log(countries);
      });
    })
    .catch((e) => {
      console.log("whoooops that didn't work");
      promptCountry();
    });
}

promptCountry();

//RestCountriesDataLink
// https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json

const Countries = [
    {
      name: "India",
         currency:"INR",
    },
    {
      name: "Srilanka",
         currency:"LKR",
    },
    {
      name: "Japan",
         currency:"JPY",
    },
    {
      name: "China",
         currency:"CNY",
    },
    {
      name: "MarshallIslands",
         currency:"USD",
    },
    {
      name: "Australia",
         currency:"AUD",
    },
    {
      name: "EastTimor",
         currency:"USD",
    },
    {
      name: "Egypt",
         currency:"EGP",
    },
    {
      name: "Malaysia",
         currency:"MYR",
    },
    {
      name: "NewZealand",
         currency:"NZD",
    },
    {
      name: "Zimbabwe",
         currency:"USD",
    },
    {
      name: "Palau",
         currency:"USD",
    },
    {
        name: "UnitedStates",
           currency:"USD",
      },
     
];
//usd cuurency contries
let UsdCurrencyCountries =Countries.filter(Countries => Countries.currency ==="USD");
    for (let key in UsdCurrencyCountries)
    console.log(UsdCurrencyCountries[key].name);

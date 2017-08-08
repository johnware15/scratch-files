const clients = require('./clients.json');
const city = process.argv[2];
let term = " "
let searchResult = city.toLowerCase()

let clientsByCity = clients.filter(function(term) {
  return searchResult
});
console.log(searchResult);


// let searchOutput = clientsByCity.map(function(searchResult) {
//
//   return {
//     "id": searchResult.id,
//     "rep_name": searchResult.rep_name,
//     "company": searchResult.company,
//     "city": searchResult.city,
//     "state": searchResult.state
//   }
//
// });

let searchOutput = new Map(Object.entries(clients) {
  clientsByCity.map(function (searchResult) {
    return {
      "id": searchResult.id,
      "rep_name": searchResult.rep_name,
      "company": searchResult.company,
      "city": searchResult.city,
      "state": searchResult.state
    }
  });
});

console.log(searchOutput);

const clients = require('./clients.json');
const company = process.argv[2];
let term = " "
let searchResult = company.startsWith()

let clientsByCompany = clients.filter(function(term) {
  return searchResult
});

console.log(searchResult);

// let searchOutput = new Map(clientsByCompany.map(function(searchResult) {
//
//   return {
//     "id": searchResult.id,
//     "rep_name": searchResult.rep_name,
//     "company": searchResult.company,
//     "city": searchResult.city,
//     "state": searchResult.state
//   }
// }));

let searchOutput = new Map(Object.entries(clients) {
  clientsByCompany.map(function(searchResult) {
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

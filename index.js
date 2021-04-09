// index.js
const { fetchMyIP } = require('./iss');

const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

fetchMyIP((error, ip) => {
  
  if (error) {
    console.log("It didn't work!" , error);
    return;
  } 

  console.log('It worked! Returned IP:' , ip);
});


 
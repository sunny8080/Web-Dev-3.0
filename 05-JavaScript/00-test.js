const fs = require('fs');

// Read file
fs.readFile('./Js-Test-Problems.xlsx', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log("Error - " + err.message);
    // throw err
  } else {
    // console.log("Data output : ");
    // console.log(data);

    const abd = JSON.parse(data);
    console.log(abd);
  }
});

const fs = require('fs');

// Note - all function have sync operation type like, with Sync suffix
// fs.readFile() - asynchronously reads the contents of a file
// fs.readFileSync() - synchronously reads the contents of a file

// fs.readFile
// fs.writeFile
// fs.appendFile
// fs.cp // copy from a file to other file
// fs.unlink // used to delete a file
// fs.stat // used to get stats of a file
// fs.mkdir

// Read file
fs.readFile('./input.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log("Error - " + err.message);
    // throw err
  } else {
    console.log("Data output : ");
    console.log(data);
  }
});


// Write file
const content = "I am learning js"
fs.writeFile('./output.txt', content, (err) => {
  if (err) {
    console.log("Error : " + err.message);
    // throw err;
  } else {
    console.log("Write successfully");
  }
})

// Append file
const appendContent = "\nStill learning"
fs.appendFile('./output.txt', appendContent, (err) => {
  if (err) {
    console.log("Error : " + err.message);
    // throw err;
  } else {
    console.log("Append successfully");
  }
})

// JSON reading

const fs = require("fs");

fs.readFile("/file.json", (err, data) => {
  if (err) {
    // handle error
    console.log(err);
    return;
  }

  // no errors, process data
  console.log(data);
});

// JSON reading with promises : https://nodejs.dev/learn/understanding-javascript-promises

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return; // and we don't want to go any further
      }
      resolve(data);
    });
  });
};

getFile("/etc/passwd")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
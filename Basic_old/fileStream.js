let fs = require("fs");

/** READ FILE */

fs.readFile("file.txt", function (error, data) {
  // we can define format type like: fs.readFile('file.txt', 'utf-8
  if (error) {
    throw error;
  }
  console.log(data); //node fileStream.js return Buffer
  console.log(data.toString()); // return string
});

/** WRITE FILE */
// if a file name "file-seecond.txt" does not exist, it is created and written into it
// WritwFile finction firstly deletes all statements in the file then writes it to the file.

fs.writeFile("file-second.txt", "Sakmak Family", function (error, data) {
  if (error) {
    throw error;
  }
  console.log("File was written");
});

// if we want to add new statements
fs.appendFile("file-second.txt", "Sekeroglu Family", function (error, data) {
  if (error) {
    throw error;
  }
  console.log("Statement was added");
});

//  Delete file

fs.unlink("file-second.txt", function (error) {
  if (error) {
    throw error;
  }
  console.log("File was deleted");
});

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   const folderName = 'new_folder';

//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   }

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Folder created successfully!\n');
// });
                      
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const folderName = path.join(__dirname, "new_folder");

  fs.access(folderName, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdir(folderName, { recursive: true }, (mkdirErr) => {
        if (mkdirErr) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "text/plain");
          res.end("Error creating folder\n");
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Folder created successfully!\n");
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Folder already exists!\n");
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

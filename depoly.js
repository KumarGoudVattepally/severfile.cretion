//  var http=require("http")
// const { parse } = require("path")
//  var url=require(url)
//  var fs=require(fs)

// var sever =http.createServer((req,res)=>{
//     var parsedurl=url.parse(req,url,true)
//     const query = parsedUrl.query;
// fs.read("automobiles.json","utf-8",(err,data)=>{

//     if (err) {
//         res.writeHead(500, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ error: 'Unable to read the data file' }));
//         return;
//     }

//     try {
//         const jsonData = JSON.parse(data);

//         // Filter the data based on the query parameter
//         const filteredData = jsonData.filter(item => {

//                 return "Toyota" ==  t;

// })

// })

// sever.listen(3004,()=>{
//     console.log("sever is running");
// })

// var http = require("http");
// var url = require("url");
// var fs = require("fs");

// var sever = http.createServer((req, res) => {
//   var parsedUrl = url.parse(req, url, true);

//   if (parsedUrl.pathname == automobiles && req.method == "POST") {
//     fs.readFile("automobiles.json", "utf-8", (err, data) => {
//       if (err) {
//         res.write(
//           JSON.stringify({
//             msg: err.message,
//           })
//         );
//       } else {
//         res.write(
//           JSON.stringify({
//             data: data
//           })
//         );
//       }
//     });
//   }
// });
//  Server.listen(3001, () => {
//   console.log("sever is running");
// });





var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url, true); // Corrected: Use `req.url` instead of `req`

  // Corrected: Check for the correct pathname and method
  if (parsedUrl.pathname == "/automobiles" && req.method == "GET") {
    fs.readFile("automobiles.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" }); // Set status code for errors
        res.end(
          JSON.stringify({
            msg: err.message,
          })
        );
      } else {
        res.writeHead(200, { "Content-Type": "application/json" }); // Set status code for success
        res.end(
          JSON.stringify({
            data: JSON.parse(data), // Parse the JSON data before sending
          })
        );
      }
    });
  } else {
    // Handle invalid routes
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        msg: "Route not found",
      })
    );
  }
});

// Corrected: Use `server.listen` instead of `Server.listen`
server.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
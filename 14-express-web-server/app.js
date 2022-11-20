const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile('./index.html', {root: __dirname});
});

app.get("/about", (req, res) => {
  res.sendFile('./about.html', {root: __dirname});
});

app.get("/contact", (req, res) => {
  res.sendFile('./contact.html', {root: __dirname});
});

app.use('/', (req, res) => {
  res.status(404);
  res.send("404");
  // res.json({
  //   nama: 'Muhammad Naufal',
  //   email: 'kira@gmail.com',
  //   noHP: '0812434354',
  // });
  // res.sendFile('./index.html', {root: __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// // const express = require('express')
// const http = require("http")
// const fs = require("fs")
// const port = 3000;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("File not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// const server = http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });

//     const url = req.url;
//     if (url === "/about") {
//       renderHTML("./about.html", res);
//     } else if (url === "/contact") {
//       renderHTML("./contact.html", res);
//     } else {
//       renderHTML("./index.html", res);
//     }
//   })
//   .listen(port, () => {
//     console.log(`Server is listening on port ${port}..`);
//   });

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

// menggunakan ejs
app.set("view engine", "ejs");

// Third Party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));


// built in middleware
app.use(express.static('public'));

// application level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Naufal Fadhil",
      email: "fadhil@gmail.com",
    },
    {
      nama: "Rio Fikri",
      email: "rio@gmail.com",
    },
    {
      nama: "Abdul",
      email: "abdul@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Fadhil!",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  );
});

app.use((req, res) => {
  res.status(404);
  res.send('<h1>404 Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

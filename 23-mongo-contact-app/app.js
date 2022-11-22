const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// Setup EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// halaman home
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

// halaman about
app.get("/about", (req, res) => {
    res.render("about", {
      title: "Halaman About",
      layout: "layouts/main-layout",
    });
  });

// halaman contact
app.get("/contact", (req, res) => {
    const contacts = loadContact();
  
    res.render("contact", {
      title: "Halaman Contact",
      layout: "layouts/main-layout",
      contacts,
      msg: req.flash("msg"),
    });
  });

app.listen(port, () => {
  console.log(`Mongo Contact APP | Listening at http://localhost:${port}`);
});

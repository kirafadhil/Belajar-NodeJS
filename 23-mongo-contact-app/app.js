const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { db } = require("./model/contact");

// connect db.js
require("./utils/db");
const Contact = require("./model/contact");

// setup flash
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;

// Setup EJS
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

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
app.get("/contact", async (req, res) => {
  // Contact.find().then((contact) => {
  //     res.send(contact)
  // }).catch((err) => {
  //     res.send(err)
  // });

  const contacts = await Contact.find();

  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
    contacts,
    msg: req.flash("msg"),
  });
});

// halaman detail kontak
app.get("/contact/:nama", async (req, res) => {
    const contact = await Contact.findOne({nama: req.params.nama});
    
    res.render("detail", {
      title: "Halaman Detail Contact",
      layout: "layouts/main-layout",
      contact,
    });
  });

app.listen(port, () => {
  console.log(`Mongo Contact APP | Listening at http://localhost:${port}`);
});

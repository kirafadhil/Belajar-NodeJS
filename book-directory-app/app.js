const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {
    loadBooks
} = require ('./utils/books');
const port = 3000;

const app = express();

app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index', {
        title: 'Halaman Utama',
        layout: 'layouts/main-layout',
    });
})

app.get('/book', (req,res) => {
    const books = loadBooks();

    res.render('book', {
        title: 'Daftar Buku',
        layout: 'layouts/main-layout',
        books,
    })
})

app.get('/book/add', (req,res) => {
    res.render('add-book', {
        title: 'Form Tambah Buku',
        layout: 'layouts/main-layout'
    })
})

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})
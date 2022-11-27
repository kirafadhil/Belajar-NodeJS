const express = require('express');
const expressLayouts = require('express-ejs-layouts');

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

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})
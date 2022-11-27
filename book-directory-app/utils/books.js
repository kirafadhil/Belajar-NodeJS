const fs = require('fs');

const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = './data/books.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadBooks = () => {
    const file = fs.readFileSync('data/books.json', 'utf-8');
    const books = JSON.parse(file);
    return books;
}

module.exports = {loadBooks};
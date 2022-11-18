// Core Module
// File System
const { error } = require('console');
const fs = require('fs');


// menuliskan string ke file (synchronous)
// try{
//     fs.writeFileSync('data/test.txt', 'Hello Madafaka secara synchronous!');
// } catch(e) {
//     console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'Hello World secara Asynchronous', (e) =>{
//     console.log(e);
// })

// membaca isi file Synchronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca isi file Asynchronous
// fs.readFile('data/test.txt', 'utf-8',(e,data) =>{
//     if (e) throw e;
//     console.log(data);
// });

// ReadLine
const readline = require('readline');
const { json } = require('stream/consumers');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('masukan nama anda : ', (nama) =>{
    rl.question('masukan no hp : ', (noHP) =>{
        const contact = {nama,noHP};
        const file = fs.readFileSync('data/contacts.json','utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        console.log(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts,null,2));
        console.log('Terimakasih sudah menginput data!');
        rl.close();
    });
});




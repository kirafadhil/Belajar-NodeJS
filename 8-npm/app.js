// ini adalah destructuring object
const { tulisPertanyaan, simpanContact } = require("./contacts");
// kalo menggunakan cara yang dibawah ini pada method dibawah harus mencantumkan objeknya (contacts)
// const contacts = require('./contacts');

const main = async () => {
  const nama = await tulisPertanyaan("Masukan nama anda : ");
  const email = await tulisPertanyaan("Masukan email anda : ");
  const noHP = await tulisPertanyaan("Masukan no telp anda : ");

  simpanContact(nama, email, noHP);
};

main();

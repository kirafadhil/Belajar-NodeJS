const { rejects } = require("assert");
const { error } = require("console");
const fs = require("fs");
const validator = require("validator");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if(duplikat){
    console.log("nama sudah terdaftar! masukkan nama lain...");
    return false;
  }

  // cek email
  if(email){
    if(!validator.isEmail(email)){
      console.log("email yang anda masukkan tidak valid!");
      return false;
    }
  }

  // cek no hp
  if(!validator.isMobilePhone(noHP, 'id-ID')){
    console.log("No Hp yang anda masukkan tidak valid!");
    return false;
  }

  contacts.push(contact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));
  console.log("Terimakasih sudah menginput data!");
};

module.exports = { simpanContact };

const yargs = require("yargs");
const contacts = require('./contacts');

yargs
.command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "Nomor Telepon",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv){
    const contact = {
      nama: argv.nama,
      email: argv.email,
      noHP: argv.noHP
    };
    console.log(contact);
    contacts.simpanContact(argv.nama, argv.email, argv.noHP);
  },
});

yargs.parse();
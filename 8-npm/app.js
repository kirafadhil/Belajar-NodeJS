const yargs = require("yargs");
const contacts = require("./contacts");

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
    handler(argv) {
      const contact = {
        nama: argv.nama,
        email: argv.email,
        noHP: argv.noHP,
      };
      console.log(contact);
      contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

// menampilkan daftar semua nama, nohp contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama yang sudah ada",
  handler() {
    contacts.listContact();
  },
});

// menampilkan detail sebuah contact berdasarkan nama
yargs.command({
  command: "detail",
  describe: "Menampilkan detail kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

// mengapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});

yargs.parse();

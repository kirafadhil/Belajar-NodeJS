// const fs = require('fs'); // core module
// const cetakNama = require("./coba"); //import local module
// const moment = require('moment'); //third party module (npm module) tersimpan di dir node_modules

// const cetakNama = require('./coba');
// const PI = require('./coba');

const coba = require("./coba");

console.log(
  coba.cetakNama("beby"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);

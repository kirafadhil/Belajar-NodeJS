function cetakNama(nama) {
  return `Halo nama saaya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "naufal fadhil",
  umur: 21,
  cetakMhs() {
    return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
  },
};

class Orang {
    constructor(){
        console.log('class orang telah dibuat!');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.export = {
//     // dengan notasi ES6 bila nama properti dengan value nya hanya menulis 1 saja
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// };

    module.exports = {cetakNama,PI,mahasiswa,Orang};
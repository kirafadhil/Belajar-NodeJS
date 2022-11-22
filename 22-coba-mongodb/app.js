const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const dbName = "wpu";
const ObjectId = require("mongodb").ObjectId;

const client = new MongoClient(uri);

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi gagal!");
  }

  // pilih db
  const db = client.db(dbName);
  // menambahkan 1 data ke collection mahasiswa
  //   db.collection("mahasiswa").insertOne(
  //     {
  //       Nama: "Malih",
  //       Email: "malih@gmail.com",
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log("gagal menambahkan data!");
  //       }
  //       console.log(result);
  //     }
  //   );

  // menambahkan leboh dari 1 data
  //   db.collection('mahasiswa').insertMany(
  //     [
  //         {
  //             nama: 'Rio',
  //             email: 'rio@gmail.com',
  //         },
  //         {
  //             nama: 'Afif',
  //             email: 'afif@gmail.com'
  //         },
  //     ],
  //     (error, result) => {
  //     if(error){
  //         return console.log('data gagal ditambahkan!');
  //     }
  //     console.log(result);
  // });

  // menampilkan semua data yang ada di collection  'mahasiswa'
  // console.log(
  //   db
  //     .collection("mahasiswa")
  //     .find()
  //     .toArray((error, result) => {
  //         console.log(result)
  //     })
  // );

  // menampilkan data berdasarkan kriteria
  console.log(
    db
      .collection("mahasiswa")
      .find({ _id: ObjectId("637c6767f0a7b61ce620e1f7") })
      .toArray((error, result) => {
        console.log(result);
      })
  );

  // mengubah data berdasarkan id
  //   const updatePromise = db.collection("mahasiswa").updateOne(
  //     {
  //       _id: ObjectId("637c6767f0a7b61ce620e1f7"),
  //     },
  //     {
  //       $set: {
  //         email: "Avip@yahoo.com",
  //       },
  //     }
  //   );
  //   updatePromise.then((result) => {
  //     console.log(result)
  //   }).catch((err) => {
  //     console.log(error)
  //   });

  // mengubah lebih dari 1 data
  //   const updatePromise = db.collection("mahasiswa").updateMany(
  //     {
  //       nama: "Malih",
  //     },
  //     {
  //       $set: {
  //         nama: "malih doank",
  //       },
  //     }
  //   );

  // menghapus 1 data
//   db.collection("mahasiswa")
//     .deleteOne({
//       _id: ObjectId("637c6767f0a7b61ce620e1f7"),
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// menghapus lebih dari 1 data
db.collection("mahasiswa")
.deleteMany({
  nama: 'fadhil',
})
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(err);
});
});

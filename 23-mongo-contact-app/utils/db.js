const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu');

// Membuat schema
const Contact = mongoose.model('Contact', {
    nama:{
        type: String,
        required: true,
    },
    noHP:{
        type: String,
        required: true,
    },
    email:{
        type: String,
    },
})

// menambah 1 data 
const contact1 = new Contact({
    nama: 'Erik',
    noHP: '088188775566',
    email: 'erik@gmail.com'
});

// simpan ke collection
contact1.save().then((contact) => {
    console.log(contact);
})
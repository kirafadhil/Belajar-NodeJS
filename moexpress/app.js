const express = require('express')
const cors = require('cors')
const port = 3000;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then((result) => {
        console.log('database connected')
    }).catch((err) => {
        console.log('cannot connect to database!', err)
        process.exit()
    });


app.get('/', (req,res) => {
    res.json({
        message: "Welcome KIRAFADHIL!"
    })
})


app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`)
})




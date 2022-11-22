const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const db = require('./app/models')
db.mongoose
    .connect(db.url)
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

require('./app/routes/post.routes')(app)


const port = 3000;
app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`)
})




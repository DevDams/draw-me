const express = require('express')
const app = express()
const route = require('./routes/route')
const db = require('./db/database')

const PORT = process.env.PORT || 5000


app.use(route)

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})

db.connect()
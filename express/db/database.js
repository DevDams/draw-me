
const mongoose = require('mongoose')

module.exports.connect = function() {

    mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})

    const db = mongoose.connection;

    db.on('open' ,()=>{
        console.log('db running...')
    })

    db.on('error' ,(err)=>{
        throw err
    })
}
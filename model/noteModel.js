const mongoose = require("mongoose")

const db = mongoose.connect(process.env.DBCONNECTION)
    .then(result => { if (result) { console.log('Database Connected') } })
    .catch(err => console.log("Database Connection Error : \n\n" + err))
const schema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }

}, { timestamps: true })
const noteModel = new mongoose.model('Notes', schema)

module.exports = noteModel

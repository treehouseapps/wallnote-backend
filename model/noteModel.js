const mongoose = require("mongoose");

async function connectToDatabase() {
    try {
        const result = await mongoose.connect('mongodb+srv://Beki:78122775Beki@cluster0.6ypmi.mongodb.net/notes');
        if (result) {
            console.log('Database Connected');
        }
    } catch (err) {
        console.log("Database Connection Error:\n\n" + err);
    }
}

connectToDatabase();

const schema = new mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
}, { timestamps: true });

const noteModel = mongoose.model('Notes', schema);

module.exports = noteModel;

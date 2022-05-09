const mongoose = require('mongoose')

const collection = 'User'

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
}, {
    timestamp: true,
    versionKey: false,
    collection
})

module.exports = mongoose.model(collection, userSchema)
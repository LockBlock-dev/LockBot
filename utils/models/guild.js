const mongoose = require('mongoose')

const schema = mongoose.Schema({
    id: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    logChannel: { type: String, default: null }
}, { versionKey: false })

module.exports = mongoose.model('Guild', schema)

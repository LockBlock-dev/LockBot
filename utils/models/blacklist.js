const mongoose = require('mongoose')

const schema = mongoose.Schema({
    id: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    reason: { type: String }
}, { versionKey: false })

module.exports = mongoose.model('Blacklist', schema)

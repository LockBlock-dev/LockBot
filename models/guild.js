const mongoose = require("mongoose")
const { DEFAULT_SETTINGS: defaults } = require("../config.js")

const guildSchema = mongoose.Schema({
    _id: String,
    guildID: String,
    guildName: String,
    guildPrefix: {
        "type": String,
        "default": defaults.prefix
    },
    guildLang: {
        "type": String,
        "default": defaults.lang
    },
    guildAnonMode: {
        "type": Boolean,
        "default": defaults.anonMode
    }
})



module.exports = mongoose.model("Guild", guildSchema)
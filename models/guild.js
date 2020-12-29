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
    }
})



module.exports = mongoose.model("Guild", guildSchema)
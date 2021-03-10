const mongoose = require("mongoose")

const blacklistSchema = mongoose.Schema({
    _id: String,
    userID: String,
    userName: String,
    reason: {
        "type": String,
        "default": "undefined"
    }
})



module.exports = mongoose.model("Blacklist", blacklistSchema)
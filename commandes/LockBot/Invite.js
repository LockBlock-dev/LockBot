const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.channel.send("https://discord.com/api/oauth2/authorize?client_id=812368677726060586&permissions=519249&scope=bot")
}



module.exports.help = MESSAGES.COMMANDS.LOCKBOT.INVITE
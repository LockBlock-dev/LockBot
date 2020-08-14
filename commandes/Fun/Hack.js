const { MESSAGES } = require("../../core/constants.js")
const fs = require("fs")

module.exports.run = async (bot, message, args) => {

    const GUILDS = JSON.parse(fs.readFileSync("./core/guildSettings.json", "utf8"))
    const langSet = GUILDS[message.guild.id].language
    const lang = require(`../../core/languages/${langSet}.json`)

    message.channel.send(lang.hack)
}



module.exports.help = MESSAGES.COMMANDS.FUN.HACK
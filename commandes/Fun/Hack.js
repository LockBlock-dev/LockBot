const { MESSAGES } = require("../../core/constants.js")
const fs = require("fs")

module.exports.run = async (bot, message, args, settings) => {

    const lang = require(`../../core/languages/${settings.guildLang}.json`)

    message.channel.send(lang.hack)
}



module.exports.help = MESSAGES.COMMANDS.FUN.HACK
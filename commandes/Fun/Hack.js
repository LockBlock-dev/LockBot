const { COMMANDS } = require("../../core/constants.js")

module.exports.run = async (bot, message, args, settings, lang) => {

    message.channel.send(lang.hack)
}



module.exports.help = COMMANDS.FUN.HACK
const { COMMANDS } = require("../../core/constants.js")

module.exports.run = async (bot, message, args, lang) => {

    message.channel.send(lang.hack)
}



module.exports.help = COMMANDS.FUN.HACK
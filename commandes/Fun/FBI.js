const { MESSAGES } = require("../../core/constants.js")

module.exports.run = async (bot, message) => {
    message.channel.send("https://tenor.com/4Bne.gif")
}



module.exports.help = MESSAGES.COMMANDS.FUN.FBI
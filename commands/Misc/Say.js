const { COMMANDS } = require("../../core/constants.js")

module.exports.run = async (bot, message, args) => {
   
    message.delete()

    message.channel.send(args.join(" "))
}



module.exports.help = COMMANDS.MISC.SAY
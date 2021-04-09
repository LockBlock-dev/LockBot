const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, lang, settings) => {
   
    message.delete()

    const anonMode = settings.guildAnonMode

    if(anonMode == true) {
        return message.channel.send(args.join(" "))

    } else {
        return message.channel.send(`${args.join(" ")}\n\n- **${message.author.tag}**`)
    }
}



module.exports.help = COMMANDS.MISC.SAY
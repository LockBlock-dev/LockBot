const Discord = require("discord.js")
const { MESSAGES } = require("../../core/constants.js")
const fs = require("fs")

module.exports.run = async (bot, message, args, settings) => {

    const lang = require(`../../core/languages/${settings.guildLang}.json`)
    
    message.delete()
    if (args.join(" ") === "@everyone" || args.join(" ") === "@here")
    return message.channel.send(lang.sayDontEveryoneOrHere)
    message.channel.send(args.join(" "))
}



module.exports.help = MESSAGES.COMMANDS.MISC.SAY
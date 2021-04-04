const { COMMANDS } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args, settings) => {

    var lang = require(`../../core/languages/${settings.guildLang}.json`)
    
    message.delete()

    const getAction = args[0]
   
    if (!args[1]) {
        return message.channel.send(bot.error("You must provide an user ID !", message.author.id, lang))
    }

    var user
     
    if (message.mentions.members.first()) {
        user = message.mentions.members.first().user
    }
    
    if (message.guild.members.cache.get(args[1])) {
        user = message.guild.members.cache.get(args[1]).user
        console.log(user.id)
    }       

    if (!user) {
        return message.channel.send(bot.error(lang.errorUserNotFound, message.author.id, lang))
    }

    const reason = args.slice(2).join(" ")

    const newBlacklisted = {
        userID: user.id,
        userName: user.username,
        reason: reason
    }
  
    switch(getAction) {
        case "add": {

            if (!args[2]) {
                return message.channel.send(bot.error("You must provide a reason !", message.author.id, lang))
            }

            await bot.addToBlacklist(newBlacklisted)

            await user.send(`${lang.blacklistBanWarning} ${reason}`).catch(() => {
                message.channel.send(bot.error("User has DMs closed or has no mutual servers with the bot", message.author.id, lang))
             })
           
            break
        }
        case "remove": {

            await bot.removeFromBlacklist(user)
                                          
            break
        }
    }
}



module.exports.help = COMMANDS.DEV.BLACKLIST
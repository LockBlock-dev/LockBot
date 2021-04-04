const { COMMANDS } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args, lang) => {
    
    message.delete()

    const getAction = args[0]
   
    if (!args[1]) {
        return message.channel.send(bot.error("You must provide an user ID !", message.author.id, lang))
    }

    const user = bot.memberFinder(message, args, 1)

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
                message.channel.send(bot.error("User has DMs closed or has no mutual servers with the bot. I couldn't sent him the ban warning", message.author.id, lang))
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
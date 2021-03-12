const { MESSAGES } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args, settings) => {

    var lang = require(`../../core/languages/${settings.guildLang}.json`)
    
    message.delete()
    
    if (message.author.id !== process.env.DEV_ID) return message.reply("LockBot isn\'t your bot !")

    const getAction = args[0]
    const ID = args[1]
    const user = await bot.users.fetch(ID)
    
    if (!args[1]) {
        return message.reply("You must provide an user ID !")
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
                return message.reply("You must provide a reason !")
            }

            await bot.addToBlacklist(newBlacklisted)

            await user.send(`${lang.blacklistBanWarning} ${reason}`).catch(() => {
                message.channel.send("User has DMs closed or has no mutual servers with the bot");
             })
           
            break
        }
        case "remove": {

            await bot.removeFromBlacklist(user)
                                          
            break
        }
    }
}



module.exports.help = MESSAGES.COMMANDS.DEV.BLACKLIST
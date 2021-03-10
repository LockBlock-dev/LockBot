const { MESSAGES } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args) => {
    
    message.delete()
    
    if (message.author.id !== process.env.DEV_ID) return message.reply("LockBot isn\'t your bot !")

    const getAction = args[0]
    const ID = args[1]
    const user = await bot.users.fetch(ID)
    
    if (!args[1]) {
        return message.reply("You must provide an user ID !")
    }

    if (args[2]) {
        var reason = args.slice(2).join(" ")
        var newBlacklisted = {
            userID: user.id,
            userName: user.username,
            reason: reason
        }
    } else {
        var newBlacklisted = {
            userID: user.id,
            userName: user.username
        }
    }
  
    switch(getAction) {
        case "add": {

            await bot.addToBlacklist(newBlacklisted)
           
            break
        }
        case "remove": {

            await bot.removeFromBlacklist(user)
                                          
            break
        }
    }
}



module.exports.help = MESSAGES.COMMANDS.DEV.BLACKLIST
const { MESSAGES } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (message.author.id !== process.env.DEV_ID) return message.reply("LockBot isn\'t your bot !")

    const guild = bot.guilds.cache.get(args[0])
    if (!guild) return message.reply("The bot isn't in a guild with this ID.")

    guild.leave()

    .then(message.channel.send("The bot isn't longer in this guild !"))
}



module.exports.help = MESSAGES.COMMANDS.DEV.GUILDLEAVE
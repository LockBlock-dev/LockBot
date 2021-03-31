const { COMMANDS } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args) => {

    message.delete()

    const guild = bot.guilds.cache.get(args[0])
    if (!guild) return message.channel.send(bot.error("The bot isn't in the guild with this ID.", message.author.id, lang))

    guild.leave()

    .then(message.channel.send("The bot isn't longer in this guild !"))
}



module.exports.help = COMMANDS.DEV.GUILDLEAVE
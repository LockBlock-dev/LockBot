const { COMMANDS } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args) => {

    message.delete()

    const guild = bot.guilds.cache.get(args[0])
    if (!guild) return message.reply("The bot isn't in a guild with this ID.")

    guild.leave()

    .then(message.channel.send("The bot isn't longer in this guild !"))
}



module.exports.help = COMMANDS.DEV.GUILDLEAVE
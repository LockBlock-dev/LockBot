const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (message.author.id !== "249899689028091904") return message.reply("LockBot isn\'t your bot !")

    const guild = bot.guilds.cache.get(args[0])
    if (!guild) return message.reply("The bot isn't in the guild with this ID.")

    guild.leave()

    .then(message.channel.send("The bot isn't longer in this guild !"))
}



module.exports.help = MESSAGES.COMMANDS.DEV.GUILDLEAVE
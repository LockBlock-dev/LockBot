const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, settings) => {

var lang = require(`../../core/languages/${settings.guildLang}.json`)

  const getSetting = args[0]
  const newValue = args.slice(1).join(" ")
  
    switch(getSetting) {
        case "prefix": {
            if (newValue) {
                await bot.modifyGuild(message, { guildPrefix: newValue})
                var settings = await bot.getGuild(message)
                message.channel.send(lang.prefixNew + " " + settings.guildPrefix)
            }
            break
        }
        case "lang": {
            if (newValue) {
                await bot.modifyGuild(message, { guildLang: newValue})
                var settings = await bot.getGuild(message)
                message.channel.send(lang.langNew + " " + settings.guildLang)
            }
            break
        }
    }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.SETTINGS
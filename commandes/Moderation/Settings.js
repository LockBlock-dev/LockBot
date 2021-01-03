const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")
const path = require("path")

module.exports.run = async (bot, message, args, settings) => {

var lang = require(`../../core/languages/${settings.guildLang}.json`)

    const getSetting = args[0]
    const newValue = args.slice(1).join(" ")
  
    switch(getSetting) {
        case "prefix": {

            if(args[2]) {
                return message.channel.send(lang.configPrefixArgs)
            }
        
            if(args[1].length > 3) {
                return message.channel.send(lang.configPrefixLengthMax)
            }
        
            if(typeof args[1] !== "string"){
                return message.channel.send(configPrefixNotString)
            }

            if (newValue) {
                await bot.modifyGuild(message.guild.id, { guildPrefix: newValue})
                var settings = await bot.getGuild(message.guild.id)
                message.channel.send(lang.configPrefixNew + settings.guildPrefix)
            }
            break
        }
        case "lang": {

            if(args[2]) {
                return message.channel.send(lang.configLangArgs)
              }
        
            if(args[1].length > 2) {
                return message.channel.send(lang.configLangTooLong)
            }
        
            if(typeof args[1] !== "string"){
              return message.channel.send(lang.configLangNotString)
            }

            const languagesPath = path.join(__dirname, `../../core/languages/${newValue}.json`)

            fs.access(languagesPath, fs.F_OK, async (err) => {
                if (err) {
                  console.error(err)
                  message.channel.send(lang.configLangUnknown)
                  return
                }
              
                if (newValue) {
                    await bot.modifyGuild(message.guild.id, { guildLang: newValue})
                    var settings = await bot.getGuild(message.guild.id)
                    message.channel.send(lang.configLangNew + settings.guildLang)
                }
              })
                              
            break
        }
    }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.SETTINGS
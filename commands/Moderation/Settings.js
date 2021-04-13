const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")
const path = require("path")

module.exports.run = async (bot, message, args, lang, settings) => {

    const oldPrefix = settings.guildPrefix
    const oldLang = settings.guildLang
    var oldAnonMode = settings.guildAnonMode
    var oldLogChannel = settings.guildLogChannel
    const getSetting = args[0]
    const newValue = args[1]
  
    switch(getSetting) {
        case "prefix": {
       
            if(args[1].length > 3) {
                return message.channel.send(bot.error(lang.configPrefixLengthMax, message.author.id, lang))
            }
        
            if(typeof args[1] !== "string"){
                return message.channel.send(bot.error(lang.configPrefixNotString, message.author.id, lang))
            }

            if (newValue) {
                await bot.updateGuild(message.guild.id, { guildPrefix: newValue})
                var settings = await bot.getGuild(message.guild.id)

                const embed = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}>`)
                    .addField(lang.configPrefixOld, oldPrefix)
                    .addField(lang.configPrefixNew, settings.guildPrefix)
                    .setColor("#FF8A33")
                    .setTimestamp()
	                .setFooter("© LockBot")

                message.channel.send(embed)

                if (settings.guildLogChannel) {
                    const channel = message.guild.channels.cache.get(settings.guildLogChannel)
        
                    if (channel) {
                        channel.send(bot.log("Prefix", message.author, "GuildSettings", lang))
                    } else {
                        return message.channel.send(bot.error(lang.errorChannelLogNotFound, message.author.id, lang))
                    }
                }
            }

            break
        }
        case "language":
        case "lang": {
       
            if(args[1].length > 2) {
                return message.channel.send(bot.error(lang.configLangTooLong, message.author.id, lang))
            }
        
            if(typeof args[1] !== "string"){
                return message.channel.send(bot.error(lang.configLangNotString, message.author.id, lang))
            }

            const languagesPath = path.join(__dirname, `../../core/languages/${newValue}.json`)

            fs.access(languagesPath, fs.F_OK, async (err) => {
                if (err) {
                  console.error(err)
                  return message.channel.send(bot.error(lang.configLangUnknown, message.author.id, lang))
                }
              
                if (newValue) {
                    await bot.updateGuild(message.guild.id, { guildLang: newValue})
                    var settings = await bot.getGuild(message.guild.id)

                    const embed = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}>`)
                    .addField(lang.configLangOld, oldLang)
                    .addField(lang.configLangNew, settings.guildLang)
                    .setColor("#FF8A33")
                    .setTimestamp()
	                .setFooter("© LockBot")

                    message.channel.send(embed)

                    if (settings.guildLogChannel) {
                        const channel = message.guild.channels.cache.get(settings.guildLogChannel)
            
                        if (channel) {
                            channel.send(bot.log("Lang", message.author, "GuildSettings", lang))
                        } else {
                            return message.channel.send(bot.error(lang.errorChannelLogNotFound, message.author.id, lang))
                        }
                    }
                }
            })
                              
            break
        }
        case "anon" :
        case "anonmode" :
        case "anonMode": {
              
            if(typeof args[1] !== "string"){
                return message.channel.send(bot.error(lang.configAnonEmpty, message.author.id, lang))
            }

            if (newValue) {

                if (newValue == "on") {
                    await bot.updateGuild(message.guild.id, { guildAnonMode: true})

                } else if (newValue == "off") {
                    await bot.updateGuild(message.guild.id, { guildAnonMode: false})
                }

                if (oldAnonMode == true) {
                    oldAnonMode = "on"
                    newAnonMode = "off"

                } else if (oldAnonMode == false) {
                    oldAnonMode = "off"
                    newAnonMode = "on"
                }

                const embed = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}>`)
                    .addField(lang.configAnonOld, oldAnonMode)
                    .addField(lang.configAnonNew, newAnonMode)
                    .setColor("#FF8A33")
                    .setTimestamp()
	                .setFooter("© LockBot")

                message.channel.send(embed)

                if (settings.guildLogChannel) {
                    const channel = message.guild.channels.cache.get(settings.guildLogChannel)
        
                    if (channel) {
                        channel.send(bot.log("AnonMode", message.author, "GuildSettings", lang))
                    } else {
                        return message.channel.send(bot.error(lang.errorChannelLogNotFound, message.author.id, lang))
                    }
                }
            }

            break
        }
        case "logChannel":
        case "logchannel":
        case "log": {
             
            if (newValue) {

                const channel = bot.channelFinder(message, args, 1)

                if (!channel) {
                    return message.channel.send(bot.error(lang.errorChannelNotFound, message.author.id, lang))
                }

                if (oldLogChannel == undefined) {
                    oldLogChannel = "off"
                }

                await bot.updateGuild(message.guild.id, { guildLogChannel: channel.id})
                var settings = await bot.getGuild(message.guild.id)

                const embed = new Discord.MessageEmbed()
                    .setDescription(`<@${message.author.id}>`)
                    .addField(lang.configLogChannelOld, `<#${oldLogChannel}>`)
                    .addField(lang.configLogChannelNew, `<#${settings.guildLogChannel}>`)
                    .setColor("#FF8A33")
                    .setTimestamp()
	                .setFooter("© LockBot")

                message.channel.send(embed)

                if (settings.guildLogChannel) {
                    const channel = message.guild.channels.cache.get(settings.guildLogChannel)
        
                    if (channel) {
                        channel.send(bot.log("LogChannel", message.author, "GuildSettings", lang))
                    } else {
                        return message.channel.send(bot.error(lang.errorChannelLogNotFound, message.author.id, lang))
                    }
                }
            }

            break
        }
        case "blacklist": {
            
            break
        }
    }
}

module.exports.help = COMMANDS.MODERATION.SETTINGS
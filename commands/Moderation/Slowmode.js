const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
const parse = require('parse-duration')

module.exports.run = async (bot, message, args, lang, settings) => {

    var oldDuration

    if (message.channel.rateLimitPerUser == 0) {
        oldDuration = lang.slowmodeWasDisabled
    } else {
        oldDuration = bot.sToHMS(message.channel.rateLimitPerUser)
    }

    var duration = args[0]

    if (duration == "off") {
        duration = 0
    
    } else {
        duration = parse(duration, format='s')

        if (duration < 1) {
            duration = args[0]
        }
    }

    if (isNaN(duration)) {
        return message.channel.send(bot.error("not a duration", message.author.id, lang))
    }

    if (duration >= 21600) {
        message.channel.send(bot.error(lang.slowmodeDurationTooBig, message.author.id, lang))

    } else {
        await message.channel.setRateLimitPerUser(duration)

        const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .addField(lang.slowmodeOldDuration, oldDuration)
        .addField(lang.slowmodeNewDuration, bot.sToHMS(message.channel.rateLimitPerUser))
        .setColor("#FF8A33")
        .setTimestamp()
	    .setFooter("© LockBot")
        
        message.channel.send(embed)

        if (settings.guildLogChannel) {
            const channel = message.guild.channels.cache.get(settings.guildLogChannel)

            if (channel) {
                channel.send(bot.log("Slowmode", message.author, `<#${message.channel.id}>`, lang))
            } else {
                return message.channel.send(bot.error(lang.errorChannelLogNotFound, message.author.id, lang))
            }
        }
    }
}



module.exports.help = COMMANDS.MODERATION.SLOWMODE
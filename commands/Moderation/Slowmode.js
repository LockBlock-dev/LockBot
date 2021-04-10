const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
const parse = require('parse-duration')

module.exports.run = async (bot, message, args, lang) => {

    var oldDuration = message.channel.rateLimitPerUser

    var duration = args[0]

    if (duration == "off") {
        duration = 0
        oldDuration = lang.slowmodeWasDisabled
    } else {
        duration = parse(duration, format='s')
    }

    if (duration >= 21600) {
        message.channel.send(bot.error(lang.slowmodeDurationTooBig, message.author.id, lang))

    } else {
        await message.channel.setRateLimitPerUser(duration)

        const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .addField(lang.slowmodeOldDuration, oldDuration)
        .addField(lang.slowmodeNewDuration, message.channel.rateLimitPerUser)
        .setColor("#FF8A33")
        .setTimestamp()
	    .setFooter("© LockBot")
        
        message.channel.send(embed)
    }
}



module.exports.help = COMMANDS.MODERATION.SLOWMODE
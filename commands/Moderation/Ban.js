const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = (bot, message, args, lang, settings) => {

    const member = bot.memberFinder(message, args, 0, false)

    if (!member) {
        return message.channel.send(bot.error(lang.errorUserNotFound, message.author.id, lang))
    }

    if (member.id == message.author.id) {
        const errorMessage = `${lang.errorHarmYourself1}${COMMANDS.MODERATION.BAN.name}${lang.errorHarmYourself2}`
        return message.channel.send(bot.error(errorMessage, message.author.id, lang))
    }

    const guildMember = message.guild.members.cache.get(member.id)

    if (guildMember.bannable) {
        guildMember.ban()

        const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .setThumbnail(member.avatarURL({ format: 'png', dynamic: true}))
        .addField(lang.banSuccess, `<@${member.id}>`)
        .setColor("#FF8A33")
        .setTimestamp()
        .setFooter("© LockBot")
            
        message.channel.send(embed)

        if (settings.guildLogChannel) {
            const channel = message.guild.channels.cache.get(settings.guildLogChannel)

            if (channel) {
                channel.send(bot.log("Ban", message.author, `<@${member.id}>`, lang))
            } else {
                return message.channel.send(bot.error(lang.errorChannelLogNotFound, message.author.id, lang))
            }
        }

    } else {
        const errorMessage = `${lang.banFailed}<@${member.id}>`
        message.channel.send(bot.error(errorMessage, message.author.id, lang))
    }

}



module.exports.help = COMMANDS.MODERATION.BAN
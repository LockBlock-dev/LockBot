const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, lang, settings) => {

    const member = args[0]

    var ID

    if (member.includes('@')) {
        ID = member.replace('@','').replace('<','').replace('>','')
    } else {
        ID = member
    }

    if (isNaN(ID)) {
        return message.channel.send(bot.error(lang.errorUserNotFound, message.author.id, lang))
    }

    const user = await bot.users.fetch(ID)

    if (!user) {
        return message.channel.send(bot.error(lang.errorUserNotFound, message.author.id, lang))
    }

    if (user.id == message.author.id) {
        const errorMessage = `${lang.errorHarmYourself1}${COMMANDS.MODERATION.BAN.name}${lang.errorHarmYourself2}`
        return message.channel.send(bot.error(errorMessage, message.author.id, lang))
    }

    try {
        message.guild.members.unban(user.id)

        const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .setThumbnail(user.avatarURL({ format: 'png', dynamic: true}))
        .addField(lang.unbanSuccess, `<@${user.id}>`)
        .setColor("#FF8A33")
        .setTimestamp()
        .setFooter("© LockBot")
            
        message.channel.send(embed)

        if (settings.guildLogChannel) {
            const channel = message.guild.channels.cache.get(settings.guildLogChannel)

            if (channel) {
                channel.send(bot.log("Unban", message.author, `<@${user.id}>`, lang))
            } else {
                return message.channel.send(bot.error(lang.errorChannelLogNotFound, message.author.id, lang))
            }
        }

    } catch (e) {
        const errorMessage = `${lang.unbanFailed}<@${ID}>`
        message.channel.send(bot.error(errorMessage, message.author.id, lang))
    }

}



module.exports.help = COMMANDS.MODERATION.UNBAN
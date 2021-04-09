const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = (bot, message, args, lang) => {

    const member = bot.memberFinder(message, args, 0, false)

    if (!member) {
        return message.channel.send(bot.error(lang.errorUserNotFound, message.author.id, lang))
    }

    if (member.id == message.author.id) {
        const errorMessage = `${lang.errorHarmYourself1}${COMMANDS.MODERATION.KICK.name}${lang.errorHarmYourself2}`
        return message.channel.send(bot.error(errorMessage, message.author.id, lang))
    }

    const guildMember = message.guild.members.cache.get(member.id)

    if (guildMember.kickable) {
        guildMember.kick()

        const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .setThumbnail(member.avatarURL({ format: 'png', dynamic: true}))
        .addField(lang.kickSuccess, `<@${member.id}>`)
        .setColor("#FF8A33")
        .setTimestamp()
        .setFooter("© LockBot")
            
        message.channel.send(embed)

    } else {
        const errorMessage = `${lang.kickFailed}<@${member.id}>`
        message.channel.send(bot.error(errorMessage, message.author.id, lang))
    }
    
    

}



module.exports.help = COMMANDS.MODERATION.KICK
const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, lang) => {

    const member = args[0]

    var ID

    if (member.includes('@')) {
        ID = member.replace('@','').replace('<','').replace('>','')
    } else {
        ID = member
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

    } catch (e) {
        const errorMessage = `${lang.unbanFailed}<@${ID}>`
        message.channel.send(bot.error(errorMessage, message.author.id, lang))
    }

}



module.exports.help = COMMANDS.MODERATION.UNBAN
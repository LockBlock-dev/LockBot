const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = (bot, message, args, lang) => {

    const member = bot.memberFinder(message, args, lang)

    if (!member) {
        return message.channel.send(bot.error(lang.errorUserNotFound, message.author.id, lang))
    }

    const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .addField(lang.profilePicture, `<@${member.id}>`)
        .setImage(member.avatarURL({ format: 'png', dynamic: true, size: 4096 }))
        .setColor("#FF8A33")
    
    message.channel.send(embed)
}



module.exports.help = COMMANDS.INFOS.PROFILEPICTURE
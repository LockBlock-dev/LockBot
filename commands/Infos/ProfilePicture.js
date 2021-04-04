const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = (bot, message, args, settings, lang) => {

    var member
     
    if(args.length == 0) {

        member = message.author

    } else {

        if (message.mentions.members.first()) {
            member = message.mentions.members.first().user
        }
    
        if (message.guild.members.cache.get(args[0])) {
            member = message.guild.members.cache.get(args[0]).user
        }       
    }

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
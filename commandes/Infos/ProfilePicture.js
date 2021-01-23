const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = (bot, message, args, settings) => {

    const lang = require(`../../core/languages/${settings.guildLang}.json`)

    if(args.length == 0) {

        const member = message.author

        const embed = new Discord.MessageEmbed()
                .setTitle(message.author.username)
                .addField(lang.profilePicture, member.tag)
                .setImage(member.avatarURL({format:'png', dynamic:true, size:4096}))
                .setColor("#FF8A33")
    
        message.channel.send(embed)

    } else {
        const member = message.mentions.members.first()

        const embed = new Discord.MessageEmbed()
                .setTitle(message.author.username)
                .addField(lang.profilePicture, member.user.tag)
                .setImage(member.user.avatarURL({format:'png', dynamic:true, size:4096}))
                .setColor("#FF8A33")
    
        message.channel.send(embed)
    }
}



module.exports.help = MESSAGES.COMMANDS.INFOS.PROFILEPICTURE
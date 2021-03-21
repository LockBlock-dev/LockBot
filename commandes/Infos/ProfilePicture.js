const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = (bot, message, args, settings) => {

    const lang = require(`../../core/languages/${settings.guildLang}.json`)

    var member

    if(args.length == 0) {

        member = message.author

    } else {

        member = message.mentions.members.first()
        
    }

    const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .addField(lang.profilePicture, `<@${member.id}>`)
        .setImage(member.avatarURL({format:'png', dynamic:true, size:4096}))
        .setColor("#FF8A33")
    
    message.channel.send(embed)
}



module.exports.help = COMMANDS.INFOS.PROFILEPICTURE
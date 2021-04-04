const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message, args, settings, lang) => {

    const gamer = Math.round(Math.random() * 100)

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
        .addField(`${member.username} ${lang.gamerometer1} **${gamer}** ${lang.gamerometer2} 🎮`, '\u200b')
        .setColor("#FF8A33")
        .setTimestamp()
	    .setFooter("© LockBot")
        
    message.channel.send(embed)
}



module.exports.help = COMMANDS.FUN.GAMER
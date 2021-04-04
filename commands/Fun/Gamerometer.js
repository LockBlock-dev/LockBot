const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message, args, lang) => {

    const gamer = Math.round(Math.random() * 100)

    const member = bot.memberFinder(message, args, lang)

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
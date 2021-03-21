const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message) => {

    const settings = await bot.getGuild(message.guild.id)
    const lang = require(`../../core/languages/${settings.guildLang}.json`)

    const gamer = Math.round(Math.random() * 100)

    var member

    if(args.length == 0) {

        member = message.author

    } else {

        member = message.mentions.members.first()
        
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
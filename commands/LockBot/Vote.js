const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, lang) => {

    const embed = new Discord.MessageEmbed()
		.setDescription(`<@${message.author.id}>`)
		.addField(lang.vote,"https://top.gg/bot/812368677726060586")
		.setColor("#FF8A33")
		.setFooter("© LockBot")
		.setTimestamp()
	
	message.channel.send(embed)
}



module.exports.help = COMMANDS.LOCKBOT.VOTE
const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message) => {
    const embed = new Discord.MessageEmbed()
		.setDescription(`<@${message.author.id}>`)
		.addField("URL :","https://discord.com/api/oauth2/authorize?client_id=812368677726060586&permissions=1476765782&scope=bot")
		.setColor("#FF8A33")
		.setFooter("© LockBot")
		.setTimestamp()
	
	message.channel.send(embed)
}



module.exports.help = COMMANDS.LOCKBOT.INVITE